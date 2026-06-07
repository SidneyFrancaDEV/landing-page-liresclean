 new Swiper(".results-swiper", {
        loop: true,
        spaceBetween: 16,
        slidesPerView: 1,
        pagination: {
          el: ".results-swiper .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".results-swiper .swiper-button-next",
          prevEl: ".results-swiper .swiper-button-prev",
        },
        breakpoints: {
          992: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        },
      });

      new Swiper(".testimonials-swiper", {
        loop: true,
        spaceBetween: 16,
        slidesPerView: 1,
        pagination: {
          el: ".testimonials-swiper .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".testimonials-swiper .swiper-button-next",
          prevEl: ".testimonials-swiper .swiper-button-prev",
        },
        breakpoints: {
          992: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        },
      });