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