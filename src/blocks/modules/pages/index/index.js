const homeSlider = document.querySelector('.home-slider');
const offerSlider = document.querySelector('.p-home__offer-slider');
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

if (offerSlider) {
  const prev = offerSlider.querySelector('.p-home__offer-slider-button--prev');
  const next = offerSlider.querySelector('.p-home__offer-slider-button--next');
  let slider = tns({
    'container': offerSlider.querySelector('.p-home__offer-slides'),
    'items': 1,
    'responsive': {
      576: {
        'gutter': 10,
        'items': 2
      },
      768: {
        'gutter': 5,
        'items': 3
      },
      992: {
        'gutter': 15,
      },
      1200: {
        'items': 1,
        'gutter': 0,
      }
    },
    'nav': false,
    'swipeAngle': false,
    'controls': false,
    'preventScrollOnTouch': 'force'
  });

  prev.addEventListener('click', (e) => slider.goTo('prev'));
  next.addEventListener('click', (e) => slider.goTo('next'));
}