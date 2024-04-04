"use strict";

// ---on scroll animation ----
AOS.init({
  offset: 50,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 500 // values from 0 to 3000, with step 50ms

}); // ---------------------hamburger---------------------

var toggleBtn = document.getElementById("mobile-menu-icon");
var toggleBtnIcons = toggleBtn.querySelectorAll("svg");
var dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  var isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcons[0].style.display = isOpen ? "none" : "flex";
  toggleBtnIcons[1].style.display = isOpen ? "flex" : "none";
}; // ---------------------FAQ----------------------------


document.addEventListener("DOMContentLoaded", function () {
  var questionBoxes = document.querySelectorAll(".question-box");
  questionBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
}); // ------------nav on scrollbar------------

window.onscroll = function () {
  var scroll = document.documentElement.scrollTop || document.body.scrollTop;

  if (scroll > 200) {
    document.querySelector(".nav").classList.add("sticky-nav");
  } else {
    document.querySelector(".nav").classList.remove("sticky-nav");
  }
}; // let heroSectionSlide = new Swiper(".container", {
//   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
//   autoplay: {
//     delay: 6000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
// video script


function showVideoPopup() {
  var videoPopupContainer = document.getElementById('videoPopupContainer');
  videoPopupContainer.style.display = 'block';
}

function hideVideoPopup() {
  var videoPopupContainer = document.getElementById('videoPopupContainer');
  videoPopupContainer.style.display = 'none';
  var videoElement = document.querySelector('.video-popup');
  videoElement.pause();
} //footer mail and phone redirect


var supportLink = document.getElementById("supportLink");
supportLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "mailto:hello@codebell.io"; // email address
});
var businessLink = document.getElementById("businessLink");
businessLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "tel:+9101169650110"; //call
});
var reviewCustomer = new Swiper(".reviews-feedback", {
  spaceBetween: 5,
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
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
});