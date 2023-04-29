window.addEventListener('load', () => {
    const loadingBar = document.querySelector('.loading-bar');
    let width = 0;
    const interval = setInterval(() => {
      width += Math.random() * 10;
      if (width > 100) {
        clearInterval(interval);
        document.querySelector('body').style.overflow = 'auto';
        document.querySelector('.loading-container').style.display = 'none';
      }
      loadingBar.style.width = `${width}%`;
    }, 200);
  });
  