'use strict'
import navbar from './navbar'
$(document).ready(function(){

 navbar();

  $('.slider-area').slick({
      dots: true,
      slidesToShow: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 600,
      arrows: true,
      centerMode: true,
       prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left"></i></button>',
       nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right"></i></button>'
    });
    $(".slick-dots li button").text("");
});