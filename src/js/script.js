function slider() {
  let slider = $(".header_page_slider-container");
  let sliderItems = slider.children();
  let sliderThumbs = $(".header_page_slider-thumbs");

  sliderThumbs
    .on('click', '.header_page_slider-thumbs_item', function (e) {
      let t = $(this);
      let active = slider.find('.header_page_slider-container_item__wraper_active');
      let current = active.index();
      let next = current;
      
      console.log(t);
      next = t.index();
      

      if (current == next) {
        return;
      }

        
      
      active.removeClass("header_page_slider-container_item__wraper_active");

      sliderThumbs
        .find('.header_page_slider-thumbs_item__active')
        .removeClass('header_page_slider-thumbs_item__active');
      sliderItems  
        .eq(next)
        .addClass("header_page_slider-container_item__wraper_active");
      sliderThumbs
        .find('.header_page_slider-thumbs_item')  
        .eq(next)
        .addClass("header_page_slider-thumbs_item__active");

    });

  sliderItems
    .each(function (i) {
      if (!i) {
        sliderThumbs.children().eq(0).addClass("header_page_slider-thumbs_item__active");
      } 
    })
    .eq(0)
    .addClass("header_page_slider-container_item__wraper_active");
}

slider();