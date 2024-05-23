AOS.init({
    offset: 50, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500,// values from 0 to 3000, with step 50ms
  });
  
let heroImg = new Swiper(".hero-slide", {

    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

let verticalSwiper = new Swiper('.hero-txt-slide', {
    direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});



let heroPara = new Swiper(".hero-para-slide", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


document.addEventListener("DOMContentLoaded", function () {
    const imgs = document.querySelectorAll('.img-wrapper img');
    const imgCount = imgs.length;
    const sectionHeight = window.innerHeight;
    console.log("height:" + sectionHeight);
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        console.log(scrollPosition);
        const currentSectionIndex = Math.floor(scrollPosition / sectionHeight) % imgCount;
        // Hide all images and show only the current one
        imgs.forEach((img, index) => {
            img.style.display = index === currentSectionIndex ? 'block' : 'none';
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const imgs = document.querySelectorAll('.img-wrapper1 img');
    const imgCount = imgs.length;
    const sectionHeight = window.innerHeight;
    console.log("height:" + sectionHeight);
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        console.log(scrollPosition);
        const currentSectionIndex = Math.floor(scrollPosition / sectionHeight) % imgCount;
        // Hide all images and show only the current one
        imgs.forEach((img, index) => {
            img.style.display = index === currentSectionIndex ? 'block' : 'none';
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const imgs = document.querySelectorAll('.img-wrapper2 img');
    const imgCount = imgs.length;
    const sectionHeight = window.innerHeight;
    console.log("height:" + sectionHeight);
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        console.log(scrollPosition);
        const currentSectionIndex = Math.floor(scrollPosition / sectionHeight) % imgCount;
        // Hide all images and show only the current one
        imgs.forEach((img, index) => {
            img.style.display = index === currentSectionIndex ? 'block' : 'none';
        });
    });
});
// Select the buttons
