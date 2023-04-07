const trigger = document.querySelector('#back-to-top');

trigger.addEventListener('click', function () {
    const scrollToTop = () => {
        const currentPosition = window.pageYOffset;
        if (currentPosition > 0) {
            window.scrollTo(0, currentPosition - 30);
            window.requestAnimationFrame(scrollToTop);
        }
    };
    scrollToTop();
});