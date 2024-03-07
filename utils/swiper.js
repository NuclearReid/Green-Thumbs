document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.mySwiper').forEach(el => {
        const swiper = new Swiper(el, {
            // Swiper parameters
            slidesPerView: 'auto', // Adjust based on your layout, 'auto' or a fixed number.
            spaceBetween: 10, // Adjust the space between slides as needed.
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                // Adjust the number of visible slides at various breakpoints
                320: {
                    slidesPerView: 3, // Show more cards on smaller screens
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 5, 
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 7, 
                    spaceBetween: 30,
                },
            },
        });
    });
});
