function menuMobile() {
  const mobileDisplay = document.getElementById('mobileDisplay');
  const mobileMenu = document.getElementById('mobileMenu');
  
  mobileDisplay.classList.toggle('dispNone1');
  mobileMenu.classList.toggle('dispNone1');
}

document.getElementById('toolbar').addEventListener('click', menuMobile);
document.getElementById('xButton').addEventListener('click', menuMobile);
