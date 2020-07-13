const typedTextSpan = document.querySelector('.typed-text');
const textArray = ["Rebecca Wook", "Web Developer", "Creative", "Awesome"];
const typingDelay = 200;
const erasingDelay = 100;
const newtextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;


function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newtextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay)
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100)
  }
 
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(type, newtextDelay + 250)
})

jQuery(document).ready(function ($) {
  
  
  var navclone = function() {
    $('.js-clone-nav').each(function () {
      var $this = $(this);
      $this.clone().attr('class', 'clone-view').appendTo('.mobile-view-body');
    });

    // document.querySelector('.js-toggle').addEventListener('click', openNav)

    // function openNav() {
    //   document.querySelector('.mobile-view').classList.add(open);
    // }
    $('body').on('click', '.js-toggle', function (e) {
      var $this = $(this);
      e.preventDefault();
      if ($('.mobile-view').hasClass('.open')) {
        $('.mobile-view').removeClass('.open')
      } else {
        $('.mobile-view').addClass('.open')
      }
    })
  }
  navclone()
})


const menuBtn = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-view-close');
const navLink = document.querySelector('.nav-item');
const display = document.querySelector('.mobile-view');

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
navLink.addEventListener('click', toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    display.classList.add('open')
    showMenu = true;
  } else {
    display.classList.remove('open')
    showMenu = false;
  }
}

