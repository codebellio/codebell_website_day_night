let reviewCustomers = new Swiper(".swiper-container-store", {
    spaceBetween: 5,
    grabCursor: true,
    slidesPerView: 1,
    overflow: 'hidden',
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
  
    },
  
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  
  
  
  var mainSwiper = new Swiper('.store-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 200,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
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
  