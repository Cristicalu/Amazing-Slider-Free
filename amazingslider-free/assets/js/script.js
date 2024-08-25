var slider = new Swiper(".gallery-slider", {
    speed: 900,
	slidesPerView: 1,
    loop: true,
    loopedSlides: 10,
    noSwiping: true,
    keyboard: {
        enabled: true
    },
    mousewheel: {
        thresholdDelta: 70
    },
    noSwipingClass: "swiper-slide",
  	pagination: {
   	    el: ".swiper-pagination",
    	clickable: true,  	  
	 }
	});

var thumbs = new Swiper(".gallery-thumbs", {
    slidesPerView: "auto",
    speed: 900,
    spaceBetween: 10,
    centeredSlides: false,
    loopedSlides: 10,
    loop: true,
    slideToClickedSlide: true
});

slider.controller.control = thumbs;
thumbs.controller.control = slider;