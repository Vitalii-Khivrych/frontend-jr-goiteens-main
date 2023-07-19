import 'slick-carousel';
import $ from 'jquery';

$('.teachers-slider').slick({
  mobileFirst: true,
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1279.98,
      settings: {
        slidesToShow: 4,
        infinite: false,
        dots: false,
      },
    },
  ],
});
