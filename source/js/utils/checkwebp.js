const checkWebPSupport = (cb) => {
  const image = new Image();
  image.onload = () => {
    if (typeof cb === 'function') {
      cb(image.width > 0 && image.height > 0);
    }
  };
  image.onerror = () => {
    if (typeof cb === 'function') {
      cb(false);
    }
  };
  image.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
};

checkWebPSupport((isSupported) => {
  document.documentElement.classList.add(isSupported ? 'webp' : 'no-webp');
});

export { checkWebPSupport };
