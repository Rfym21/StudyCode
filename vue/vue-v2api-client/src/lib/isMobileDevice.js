function isMobileDevice() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera

  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return true
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    return true
  }

  // Other mobile devices detection
  if (/mobile/i.test(userAgent)) {
    return true
  }

  return false
}

export default isMobileDevice

