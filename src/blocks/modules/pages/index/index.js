const homeSlider = document.querySelector('.home-slider');
if (homeSlider) {
  let currentSlide = homeSlider.querySelector('.home-slider__count-current');
  let totalSlides = homeSlider.querySelector('.home-slider__count-total');
  
  let slider = tns({
    'container': homeSlider.querySelector('.home-slider__items'),
    'items': 1,
    "controlsContainer": false,
    'navContainer': homeSlider.querySelector('.home-slider__thumbnails'),
    'navAsThumbnails': true,
    'swipeAngle': false,
    'controls': false,
    'preventScrollOnTouch': 'force'
  });

  totalSlides.textContent = `0${slider.getInfo().slideCount}`;

  slider.events.on('transitionEnd', function (info, eventName) {
    currentSlide.textContent = `0${slider.getInfo().displayIndex}`;
  });
}