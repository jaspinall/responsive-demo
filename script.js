const panels = document.querySelectorAll('.panel');
const buttons = document.querySelector('.panelButton');
const main = document.querySelector('.main');
const mainHeight = getComputedStyle(main).height.split('px')[0];
const nav = document.querySelector('.menu');
const navHeight = getComputedStyle(nav).height.split('px')[0];

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

function fixScroll(e) {
  if( window.pageYOffset > mainHeight - navHeight) {
    nav.classList.remove('mobile');
    nav.classList.add('fixed');
  }
  if( window.pageYOffset < mainHeight - navHeight) {
    nav.classList.remove('fixed');
    nav.classList.add('mobile');
  }
}

window.addEventListener('scroll', fixScroll, false);
