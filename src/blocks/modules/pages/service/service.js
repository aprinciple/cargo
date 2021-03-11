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

const showListCargo = document.querySelectorAll('.show-list-cargo');
if (showListCargo) {
  const list = document.querySelector('.types-cargo__list-cargo');
  const close = list.querySelector('.types-cargo__list-cargo-close');

  close.addEventListener('click', () => list.style.display = 'none');

  showListCargo.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      list.style.display = 'block';
    });
  });
}