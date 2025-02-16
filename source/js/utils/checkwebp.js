const checkWebPSupport = (callback) => {
  const image = new Image();
  image.onload = () => callback(image.width > 0 && image.height > 0);
  image.onerror = () => callback(false);
  image.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
};

checkWebPSupport((isSupported) => {
  document.documentElement.classList.add(isSupported ? 'webp' : 'no-webp');
});

export { checkWebPSupport };
