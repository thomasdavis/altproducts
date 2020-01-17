// When building a cross platform hybrid app, there are a lot of permutations
// of potential device/platforms
// e.g. The user is running the app in Safari on an Android Tablet
// e.g. The user is running the app in an App on an an android Tablet
// e.g. The user is GoogleBot
// Potential flags are listed below, initially we will have Touch/Desktop

// isTouch
// isDesktop
// isIOS
// isAndroid
// isBrowser
// isApp
// isSpider
// isGoogleBot
// isIpod
// isIpad
// isIphone

// Note from TD - Seems like overkill, but in my experience of building consumer
// apps, fixing bugs for these individual platforms will popup quickly

// In the future, a lot of these flags will be parsed from the User Agent
const isTouch = isMobileDevice();

export const platform = {
  isTouch
};

// https://coderwall.com/p/i817wa/one-line-function-to-detect-mobile-devices-with-javascript
function isMobileDevice() {
  if (typeof window === "undefined") {
    return null; // TODO We should use user agents to detect this
  }
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}
