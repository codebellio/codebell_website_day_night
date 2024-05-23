"use strict";

AOS.init({
  offset: 50,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 500,
  // values from 0 to 3000, with step 50ms
  easing: 'ease-out'
}); // ---------------------FAQ----------------------------

document.addEventListener("DOMContentLoaded", function () {
  var questionBoxes = document.querySelectorAll(".question-box");
  questionBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});
var reviewCustomers = new Swiper(".swiper-container-store", {
  spaceBetween: 5,
  grabCursor: true,
  slidesPerView: 1,
  overflow: 'hidden',
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var mainSwiper = new Swiper('.store-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 200,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var miniImgs = document.querySelectorAll('.mini-img');
miniImgs.forEach(function (miniImg, index) {
  miniImg.addEventListener('click', function () {
    mainSwiper.slideTo(index);
  });
});
mainSwiper.on('slideChange', function () {
  var activeIndex = mainSwiper.activeIndex;
  miniImgs.forEach(function (miniImg, index) {
    if (index === activeIndex) {
      miniImg.classList.add('active-img');
    } else {
      miniImg.classList.remove('active-img');
    }
  });
});
var arrow1 = document.querySelector('.arrow1');
var arrow2 = document.querySelector('.arrow2');
arrow1.addEventListener('click', function () {
  mainSwiper.slidePrev();
});
arrow2.addEventListener('click', function () {
  mainSwiper.slideNext();
}); //--- --english hindi button selection --------------------------------

var englishBtn = document.getElementById('english-btn');
var hindiBtn = document.getElementById('hindi-btn');

function toggleOutline(event) {
  var clickedButton = event.target;
  englishBtn.classList.remove('fill');
  hindiBtn.classList.remove('fill');
  clickedButton.classList.add('fill');
}

englishBtn.addEventListener('click', toggleOutline);
hindiBtn.addEventListener('click', toggleOutline); // -----sidebar------

document.getElementById("menu-icon").addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.maxHeight = sidebar.scrollHeight + "px";
  document.getElementById("overlay").classList.add("active");
});
document.getElementById("overlay").addEventListener("click", function () {
  document.getElementById("sidebar").style.maxHeight = "0";
  this.classList.remove("active");
});
document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("sidebar").style.maxHeight = "0";
  document.getElementById("overlay").classList.remove("active");
}); // -----------on scroll navbar --------------------------------

document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.nav-container');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});