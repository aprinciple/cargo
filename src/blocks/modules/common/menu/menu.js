const nav = document.getElementById("nav");
const menu = document.querySelectorAll(".menu");

if (nav && window.matchMedia("(max-width: 991px)").matches) {
  let menuButton = nav.querySelector(".menu__button");
  let menuList = nav.querySelector(".menu__list");
  let buttonOrder = nav.querySelector("#menu__order");

  menuButton.addEventListener("click", (e) => {
    let isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !isExpanded);
    menuButton.classList.toggle("menu__button--open");
    menuList.classList.toggle("menu__list--open");
    document.documentElement.classList.toggle("stop-scrolling");
    document.body.classList.toggle("stop-scrolling");
  });

  buttonOrder.addEventListener('click', (e) => {
    document.documentElement.classList.remove('stop-scrolling');
    document.body.classList.remove('stop-scrolling');
  });
}

if (menu) {
  menu.forEach((item) => {
    let togglesSublist = item.querySelectorAll(".menu__toggle-sublist");
    if (togglesSublist) {
      togglesSublist.forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
          e.preventDefault();
          e.target.classList.toggle("menu__toggle-sublist--active");

          document.addEventListener('click', (e) => {
            if(!e.target.closest('ul')) {
              // let sublist = document.querySelector('.menu__toggle-sublist--active');
              toggle.classList.remove('menu__toggle-sublist--active');
            }
          });
        });
      });
      // togglesSublist.forEach(toggle => {
      //   toggle.addEventListener('click', (e) => {
      //     e.preventDefault();
      //     let target = e.target;
      //     let parent = target.closest('li');
      //     let list = parent.querySelector('.menu__sublist');
      //     list.classList.toggle('menu__sublist--active');
      //   });
      // });
    }
  });
}