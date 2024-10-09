document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#image-slider', {
        type: 'loop',
        perPage: 3,
        focus: 'center',
        autoplay: true,
        interval: 5000,
        pauseOnHover: false,
        speed: 1000,
        gap: '1rem',
        trimSpace: false,
        breakpoints: {
            768: {
                perPage: 1,  // Display 1 image at a time on smaller screens
            },
        },
    });

    splide.on('mounted move', function () {
        var slides = splide.Components.Elements.slides;

        slides.forEach((slide, index) => {
            if (slide.classList.contains('is-active')) {
                slide.style.opacity = 1;
                slide.style.transform = 'scale(1)';
            } else {
                slide.style.opacity = 0.5;
                slide.style.transform = 'scale(0.8)';
            }
        });
    });

    splide.mount();
});