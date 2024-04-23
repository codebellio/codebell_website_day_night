"use strict";

var heroImg = new Swiper(".hero-slide", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var verticalSwiper = new Swiper('.hero-txt-slide', {
  direction: 'vertical',
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  }
});
var heroPara = new Swiper(".hero-para-slide", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var imgs = document.querySelectorAll('.img-wrapper img');
  var imgCount = imgs.length;
  var sectionHeight = window.innerHeight;
  console.log("height:" + sectionHeight);
  window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    console.log(scrollPosition);
    var currentSectionIndex = Math.floor(scrollPosition / sectionHeight) % imgCount; // Hide all images and show only the current one

    imgs.forEach(function (img, index) {
      img.style.display = index === currentSectionIndex ? 'block' : 'none';
    });
  });
});