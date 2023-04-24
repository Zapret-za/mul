var swiper = new Swiper(".mySwiper1", {
    direction: 'horizontal',
    loop: false,     
    slidesPerView: 'auto',   
      scrollbar: {
         el: ".swiper-scrollbar",
        clickable: true,
      },
      navigation: {
        nextEl: '.partner-btn-next',
        prevEl: '.partner-btn-prev',
      }, 
  });
  
  var swiper2 = new Swiper(".mySwiper2", {
    navigation: {
      nextEl: ".cases-btn-next",
      prevEl: ".cases-btn-prev",
    },
  });

  $(function () {
    $('.slider-for').each(function(num, elem) {
        elem = $(elem);
        elem.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: false,
            fade: true,
            asNavFor: '.slider-nav'
        });

        elem.next('.slider-nav-thumbnails').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: false,
            draggable: false,
            centerMode: false,
            focusOnSelect: true,
            
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        vertical: false
                    }
                }
            ]
        });
        $('.slick-prev').click(function(){
          elem.slick('slickPrev');
      });

      $('.slick-next').click(function(){
          elem.slick('slickNext');
      });
    });
});
  
//   var swiper4 = new Swiper(".mySwiper4", {
//     loop: true,
//     spaceBetween: 10,
//     slidesPerView: 3,
//   });
//   var swiper3 = new Swiper(".mySwiper3", {
//     loop: true,
//     spaceBetween: 10,
//     navigation: {
//       nextEl: ".swiper-butto-next",
//       prevEl: ".swiper-butto-prev",
//     },
//     thumbs: {
//       swiper: swiper4,
//     },
//   });
  
//   var swiper6 = new Swiper(".mySwiper6", {
//     loop: true,
//     spaceBetween: 10,
//     slidesPerView: 3,
//   });
//   var swiper5 = new Swiper(".mySwiper5", {
//     loop: true,
//     spaceBetween: 10,
//     navigation: {
//       nextEl: ".swiper-butto-next",
//       prevEl: ".swiper-butto-prev",
//     },
//     thumbs: {
//       swiper: swiper6,
//     },
//   });
