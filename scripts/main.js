document.addEventListener('DOMContentLoaded', () => {
    var mySwiper = new Swiper('.clothes-slider', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slidesPerView: 4,
    });

    $('.btn-search').click(function(event) {
    	$(this).toggleClass('active').next('.input-search').slideToggle(300);

    })

});