export const BUILD_VERSION = import.meta.env.VITE_APP_VERSION || "0.0.0";
export const BUILD_TIMESTAMP = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

// Log build info when imported
console.log(`Build Version: ${BUILD_VERSION}`);
console.log(`Build Timestamp: ${BUILD_TIMESTAMP}`);
