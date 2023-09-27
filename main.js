

  



// const nav = document.querySelector('.nav');

// window.addEventListener('scroll', () => {
// const scrollY = window.scrollY;

// const opacity = Math.min(0.8, scrollY / 200); // Adjust 200 to control when the effect starts
// const blur = Math.min(5, scrollY / 10); 


// nav.style.backgroundColor = `rgba(255, 255, 255, ${0})`;
// nav.style.backdropFilter = `blur(${20}px)`;
// });

document.addEventListener("DOMContentLoaded", function () {
    const questionBoxes = document.querySelectorAll(".question-box");
    
    questionBoxes.forEach(function (box) {
        box.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
});

 window.onscroll = function () {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (scroll > 200) {
        document.querySelector(".nav").classList.add("sticky-nav");
    } else {
        document.querySelector(".nav").classList.remove("sticky-nav");
    }
 }


 
// let swiperFeedback = new Swiper(".reviews-feedback", {
//     // cssMode: true,
//     loop : true,
//     spaceBetween : 24,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     // mousewheel: true,
//     // keyboard: true,
//     breakpoints: {
//         1200: {
//           slidesPerView: 2,
//           spaceBetween: -56,
//         },
//       },
//   });


