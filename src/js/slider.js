$(document).ready(function () {
  $('.page_baner-slider').slick({
    arrows: false,
    dots: true
  });

  //car class slider

  $('.carclass_slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0',
  });

//orderby slider
  $('.orderby_slider').slick({
    arrows: true,
    dots: false,
    fade: true,
    cssEase: 'linear',
    
  });
  
});



