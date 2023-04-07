const slider = document.querySelector('.slider');
        const thumb = document.querySelector('.slider-thumb');
        const progress = document.querySelector('.slider-progress');
        const value = document.querySelector('.slider-value');

        const range = [100, 500, 1000];
        let currentRangeIndex = 0;

        const updateSlider = (index) => {
            // Update thumb position
            const percent = (index / (range.length - 1)) * 100;
            thumb.style.left = `${percent}%`;

            // Update progress bar width
            const progressBarWidth = (index / (range.length - 1)) * 100;
            progress.style.width = `${progressBarWidth}%`;

            // Update value text
            value.innerText = `$${range[index]}`;
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

            // Show the corresponding slider section
            const sliderSections = document.querySelectorAll('.slider-section');
            sliderSections.forEach((section, i) => {
                if (i === index) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
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