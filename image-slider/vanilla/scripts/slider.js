const slider = document.querySelector('.slider');
const sliderStyles = getComputedStyle(slider);
const slides = document.querySelectorAll('.slide');
const slideWidth = document.querySelector('.slide').clientWidth;
const arrowForward = document.querySelector('.arrow-forward');
const arrowBackward = document.querySelector('.arrow-backward');
let imageIndex = 0;
let translateValue = sliderStyles.getPropertyValue('--translateValue');

arrowForward.addEventListener(
    'click',
    () => {
        imageIndex++;
        if (imageIndex > slides.length - 1) {
            imageIndex = 0;
            translateValue = translateValue + (slideWidth * (slides.length - 1));

        }
        else {
            translateValue = translateValue - slideWidth;
        }
        slider.style.setProperty('--translateValue', `${translateValue}px`);
    }
);

document.addEventListener(
    'keydown',
    (e) => {
        if(e.which === 39 || e.which === 32){
            imageIndex++;
            if (imageIndex > slides.length - 1) {
                imageIndex = 0;
                translateValue = translateValue + (slideWidth * (slides.length - 1));

            }
            else {
                translateValue = translateValue - slideWidth;
            }
            slider.style.setProperty('--translateValue', `${translateValue}px`);
        }
    }
);

arrowBackward.addEventListener(
    'click',
    () => {
        imageIndex--;
        if (imageIndex < 0) {
            imageIndex = slides.length - 1;
            translateValue = translateValue - (slideWidth * (slides.length - 1));

        }
        else {
            translateValue = translateValue + slideWidth;
        }
        slider.style.setProperty('--translateValue', `${translateValue}px`);
    }
);

document.addEventListener(
    'keydown',
    (e) => {
        if(e.which === 37){
            imageIndex--;
            if (imageIndex < 0) {
                imageIndex = slides.length - 1;
                translateValue = translateValue - (slideWidth * (slides.length - 1));

            }
            else {
                translateValue = translateValue + slideWidth;
            }
            slider.style.setProperty('--translateValue', `${translateValue}px`);
        }

    }
);