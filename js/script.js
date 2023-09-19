//*******************************************MOBILE_MENU************************************************\\
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation ?
        (link.style.animation = "") :
        (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

//*******************************************DARK_MODE_BTN************************************************\\

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#chk')

$checkbox.addEventListener('change', function () {
  $html.classList.toggle('dark-mode')
})


//*******************************************SCROLL_EFFECT************************************************\\

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
    entry.target.classList.add('show')
  }else {
    entry.target.classList.remove('show')
  }
  })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))