const sliderOurRecord = document.querySelector('.our-record__slider');
if (sliderOurRecord) {
  let prev = sliderOurRecord.querySelector('.our-record__slider-button--prev');
  let next = sliderOurRecord.querySelector('.our-record__slider-button--next');
  let wrapper = sliderOurRecord.querySelector('.our-record__slider-wrapper');
  let slide = sliderOurRecord.querySelector('.our-record__slide');
  let unitsOfScrolled = 0;

  let scroll = (direction) => {
    let widthOfSlide = slide.offsetWidth;

    if (direction === 'next') {
      unitsOfScrolled += widthOfSlide + 15;
      wrapper.scrollLeft = unitsOfScrolled;
    } else {
      unitsOfScrolled -= widthOfSlide + 15;
      wrapper.scrollLeft = unitsOfScrolled;
    }
  }

  next.addEventListener('click', (e) => scroll('next'));
  prev.addEventListener('click', (e) => scroll('prev'));
}

// if (direction === 'prev') {
//   unitsOfScrolled += widthOfSlide;
//   wrapper.style.transform = `translateX(${unitsOfScrolled}px)`;
//   console.log(unitsOfScrolled);
// }