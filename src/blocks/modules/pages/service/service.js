const itemsTypesCargo = document.querySelector('.other-types-cargo__items');
if (itemsTypesCargo) {
  let items = itemsTypesCargo.querySelectorAll('.other-types-cargo__item');
  items.forEach((item) => {
    items[0].classList.add('other-types-cargo__item--active');
    item.addEventListener('mouseover', (e) => {
      items.forEach(item => item.classList.remove('other-types-cargo__item--active'));
      item.classList.add('other-types-cargo__item--active');
    });
    item.addEventListener('mouseout', (e) => {
      items.forEach(item => item.classList.remove('other-types-cargo__item--active'));
      item.classList.remove('other-types-cargo__item--active');
    });
  } );
}