const trigger = document.querySelector('#contact');

trigger.addEventListener('click', function () {
    const scrollToBottom = () => {
        const currentPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const pageHeight = document.body.scrollHeight;
        if (currentPosition < pageHeight - windowHeight) {
            window.scrollTo(0, currentPosition + 30);
            window.requestAnimationFrame(scrollToBottom);
        }
    };
    scrollToBottom();
});