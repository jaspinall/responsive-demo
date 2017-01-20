const panels = document.querySelectorAll('.panel');
const buttons = document.querySelector('.panelButton');
const main = document.querySelector('.main');
const mainHeight = getComputedStyle(main).height.split('px')[0];
const nav = document.querySelector('nav');
const navHeight = getComputedStyle(nav).height.split('px')[0];
const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.closeMenu');
const menu = document.querySelector('.menu');

// gallery animation at the top
function toggleOpen() {
  panels.forEach((panel) => {
    panel.classList.toggle('open', false);
  })
  this.classList.toggle('open');
}

function toggleOpen() {
  panels.forEach((panel) => {
    panel.classList.toggle('open', false);
  })
  this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('mouseover', toggleOpen));
panels.forEach(panel => panel.addEventListener('click', toggleOpen));


// fix navbar at top for desktop displays
function fixScroll(e) {
  if(window.pageYOffset > mainHeight - navHeight) {
    nav.classList.remove('mobile');
    nav.classList.add('fixed');
  }
  if(window.pageYOffset < mainHeight - navHeight) {
    nav.classList.remove('fixed');
    nav.classList.add('mobile');
  }
}

if (window.innerWidth > 450) {
  window.addEventListener('scroll', fixScroll, false);
}

// open and close the menu on mobile
hamburger.addEventListener('click', () => {
  menu.style.transform = 'translateY(0)';
  hamburger.style.visibility = 'hidden';
  closeMenu.style.visibility = 'visible';
});

closeMenu.addEventListener('click', () => {
  menu.style.transform = 'translateY(-150%)';
  hamburger.style.visibility = 'visible';
  closeMenu.style.visibility = 'hidden';
});
