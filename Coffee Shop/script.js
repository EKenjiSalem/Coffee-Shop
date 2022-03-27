
// Toggles the menu in and out
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

// Toggles cart-button in and out
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

// Hides the navbar upon scrolling
  var navScroll; 

  navbar = document.querySelector('.navbar'); 

  window.addEventListener('scroll', () => {
  
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > navScroll) { 
      navbar.style.top='-100px';
    }
    else {
     navbar.style.top='0';
    }
     navScroll = scrollTop; 
 });