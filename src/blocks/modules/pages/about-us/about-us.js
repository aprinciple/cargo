const fancybox = document.getElementById('fancybox');
if (fancybox) {
  let items = fancybox.querySelectorAll('[data-fancybox]');
  items.forEach((item) => {
    let img = item.querySelector('img');
    let srcOfImg = img.src;

    let createBox = () => {
      let isBox = document.querySelector('.box');

      if (!isBox) {
        let box = item.cloneNode(true);
        box.classList.add('box');
        document.body.appendChild(box);
    
        let close = document.createElement('button');
        close.classList.add('box__button');
        box.appendChild(close);
    
        close.addEventListener('click', (e) => {
          img.src = srcOfImg;
          box.remove();
        });
      }
    }

    item.addEventListener('click', (e) => {
      createBox();
      let src = item.dataset.fancybox;
      img.src = src;
    });
  });
}