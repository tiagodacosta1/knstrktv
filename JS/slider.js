const slider = document.querySelector('.slider');
const thumb = document.querySelector('.slider-thumb');
const progress = document.querySelector('.slider-progress');

const range = [0, 1, 2];
let currentRangeIndex = 0;

// // Update slider text position
// const sliderText = document.querySelector('#slider-text');
// const sliderWidth = slider.getBoundingClientRect().width;
// const textWidth = sliderText.getBoundingClientRect().width;
// const textOffset = (textWidth / (range.length - 1)) * currentRangeIndex;
// const textLeft = `${(currentRangeIndex / (range.length - 1)) * (100 - (textWidth / sliderWidth) * 100) + textOffset}%`;
// sliderText.style.left = textLeft;

const updateSlider = (index) => {
    // Update thumb position
    const percent = (index / (range.length - 1)) * 100;
    thumb.style.left = `${percent}%`;

    // Update progress bar width
    const progressBarWidth = (index / (range.length - 1)) * 100;
    progress.style.width = `${progressBarWidth}%`;

    // Show/hide corresponding divs
    const sliderInfos = document.querySelectorAll('[id^="slider-info-"]');
    sliderInfos.forEach((info, i) => {
        if (i === index) {
            info.style.display = 'block';
        } else {
            info.style.display = 'none';
        }
    });
};

// Initialize slider
updateSlider(currentRangeIndex);

// Handle clicks on the slider track
slider.addEventListener('click', (event) => {
    const sliderWidth = slider.getBoundingClientRect().width;
    const clickX = event.clientX - slider.getBoundingClientRect().x;
    const index = Math.round((clickX / sliderWidth) * (range.length - 1));
    currentRangeIndex = index;
    updateSlider(index);
});

// Handle thumb drag
thumb.addEventListener('mousedown', (event) => {
    event.preventDefault();
    const sliderWidth = slider.getBoundingClientRect().width;

    const onMouseMove = (moveEvent) => {
        const dragX = moveEvent.clientX - slider.getBoundingClientRect().x;
        const index = Math.round((dragX / sliderWidth) * (range.length - 1));
        currentRangeIndex = index;
        updateSlider(index);
    };

    const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});
