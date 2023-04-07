function carousel() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.transform = `translateX(-${currentIndex * 100}%)`;
        // Add transition effect when we loop back to first image
        if (currentIndex === images.length - 1) {
            // Set transition duration and delay
            images[i].style.transition = `transform ${transitionDuration}ms ease-out ${transitionDelay}ms`;
        } else {
            images[i].style.transition = '';
        }
    }
    currentIndex++;

    // If we reach the end of the carousel, reset to first image
    if (currentIndex >= images.length) {
        currentIndex = 0;

        // Add delay before resetting back to first image
        setTimeout(() => {
            for (let i = 0; i < images.length; i++) {
                images[i].style.transition = '';
                images[i].style.transform = `translateX(-${currentIndex * 100}%)`;
            }
            currentIndex++;
        }, transition

        )
    }
};