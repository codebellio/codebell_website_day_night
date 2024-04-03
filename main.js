// ---on scroll animation ----
AOS.init({
  offset: 50, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500,// values from 0 to 3000, with step 50ms
});


// ---------------------hamburger---------------------
const toggleBtn = document.getElementById("mobile-menu-icon");
const toggleBtnIcons = toggleBtn.querySelectorAll("svg");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcons[0].style.display = isOpen ? "none" : "flex";
  toggleBtnIcons[1].style.display = isOpen ? "flex" : "none";
};
// ---------------------FAQ----------------------------
document.addEventListener("DOMContentLoaded", function () {
  const questionBoxes = document.querySelectorAll(".question-box");

  questionBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
      this.classList.toggle("active");

    });
  });
});
// ------------nav on scrollbar------------
window.onscroll = function () {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (scroll > 200) {
    document.querySelector(".nav").classList.add("sticky-nav");
  } else {
    document.querySelector(".nav").classList.remove("sticky-nav");
  }
};

// let heroSectionSlide = new Swiper(".container", {

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

}

//footer mail and phone redirect
const supportLink = document.getElementById("supportLink");
supportLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "mailto:hello@codebell.io"; // email address
});


const businessLink = document.getElementById("businessLink");
businessLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "tel:+9101169650110"; //call
});


let reviewCustomer = new Swiper(".reviews-feedback", {
  spaceBetween: 5,
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


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




//   var storeSwiper = new Swiper('.store-swiper', {
//     slidesPerView: 'auto', // or 1 for a single slide at a time
//     spaceBetween: 200,
//     centeredSlides:true,
//     loop: true,
//     navigation: {
//         nextEl: '.arrow1',
//         prevEl: '.arrow2',
       
//     },

// });

var storeSwiper = new Swiper('.store-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 200,
  centeredSlides: true,
  loop: true,
  navigation: {
      nextEl: '.arrow1',
      prevEl: '.arrow2',
  },
  on: {
      transitionStart: function() {
          var activeIndex = this.realIndex;
          updateActiveMiniImage(activeIndex);
          console.log(activeIndex);
      }
  }
});

// Add click event listener to mini-img elements
document.querySelectorAll('.mini-img').forEach(function(el) {
  el.addEventListener('click', function() {
      var index = parseInt(this.getAttribute('data-index'));
      storeSwiper.slideTo(index - 1);
      updateActiveMiniImage(index);
      console.log(index);
  });
});

// Add click event listener to arrow buttons
document.querySelector('.arrow1').addEventListener('click', function() {
  storeSwiper.slidePrev();
  updateActiveMiniImage(storeSwiper.realIndex);
});

document.querySelector('.arrow2').addEventListener('click', function() {
  storeSwiper.slideNext();
  updateActiveMiniImage(storeSwiper.realIndex);
});

// Function to update active mini-image
function updateActiveMiniImage(index) {
  document.querySelectorAll('.mini-img').forEach(function(el) {
      el.classList.remove('active-img');
  });
  document.querySelector('.mini-img[data-index="' + index + '"]').classList.add('active-img');
}

