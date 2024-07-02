"use strict";

// ---------------------FAQ----------------------------
document.addEventListener("DOMContentLoaded", function () {
  var questionBoxes = document.querySelectorAll(".question-box");
  questionBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
}); // first section----------------

document.addEventListener('DOMContentLoaded', function () {
  var mainImageStore = document.querySelector('.main-img-store');
  var miniImages = document.querySelectorAll('.mini-img'); // const englishImg = document.getElementById('english-img');
  // const hindiImg = document.getElementById('hindi-img');
  // englishImg.addEventListener('click', function() {
  //     englishImg.style.display = 'none';
  //     hindiImg.style.display = 'block';
  // });
  // hindiImg.addEventListener('click', function() {
  //     hindiImg.style.display = 'none';
  //     englishImg.style.display = 'block';
  // });

  miniImages.forEach(function (miniImg, index) {
    miniImg.addEventListener('click', function () {
      console.log("Clicked mini image at index: ".concat(index)); // Remove active class from all mini images

      miniImages.forEach(function (img) {
        return img.classList.remove('active-img');
      }); // Add active class to the clicked mini image

      miniImg.classList.add('active-img');
      console.log('Active class added to clicked mini image'); // Get the corresponding image or video source

      var imgElement = miniImg.querySelector('img');
      var videoElement = miniImg.querySelector('video');
      console.log('imgElement:', imgElement);
      console.log('videoElement:', videoElement); // Clear the main image store

      mainImageStore.innerHTML = '';
      console.log('Cleared main image store'); // Update the main image store with the clicked image or video

      if (imgElement) {
        var newMainImg = document.createElement('img');
        newMainImg.src = imgElement.src;
        mainImageStore.appendChild(newMainImg);
        console.log('Updated main image store with new image');
      } else if (videoElement) {
        var newMainVideo = document.createElement('video');
        newMainVideo.src = videoElement.src;
        newMainVideo.autoplay = true;
        newMainVideo.loop = true;
        newMainVideo.controls = true; // Optional: add controls for video

        mainImageStore.appendChild(newMainVideo);
        console.log('Updated main image store with new video');
      }
    });
  });
}); // -----sidebar------

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
}); //--- --english hindi button selection --------------------------------

document.addEventListener('DOMContentLoaded', function () {
  var reviewContainer = document.querySelector('.cards');
  var reviews = document.querySelectorAll('.card');
  var reviewWidth = reviews[0].offsetWidth + parseInt(getComputedStyle(reviews[0]).marginRight); // Calculate width including margin

  var containerWidth = reviewContainer.offsetWidth;
  var visibleCardsCount = Math.floor(containerWidth / reviewWidth);
  var totalCards = reviews.length;
  var index = 0; // Clone the reviews to create a seamless loop

  reviews.forEach(function (review) {
    var clone = review.cloneNode(true);
    reviewContainer.appendChild(clone);
  }); // Function to scroll to the next review

  function scrollToNextReview() {
    reviewContainer.scrollBy({
      left: reviewWidth,
      behavior: 'smooth'
    });
    index++; // Reset the scroll position if at the end

    if (index >= totalCards) {
      setTimeout(function () {
        reviewContainer.scrollTo({
          left: 0,
          behavior: 'instant'
        });
        index = 0;
      }, 2000); // Delay to allow smooth scrolling before reset
    }
  } // Check the visible cards and decide whether to start auto-scrolling


  if (window.innerWidth < 768 && visibleCardsCount <= 1 || window.innerWidth >= 768 && visibleCardsCount < totalCards) {
    setInterval(scrollToNextReview, 2000); // Adjust interval (in milliseconds) for the auto scroll
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var reviewContainer = document.querySelector('.review-cards');
  var reviews = document.querySelectorAll('.review-card');
  var reviewWidth = reviews[0].offsetWidth + parseInt(getComputedStyle(reviews[0]).marginRight); // Calculate width including margin

  var index = 0; // Clone the reviews to create a seamless loop

  reviews.forEach(function (review) {
    var clone = review.cloneNode(true);
    reviewContainer.appendChild(clone);
  }); // Function to scroll to the next review

  function scrollToNextReview() {
    reviewContainer.scrollBy({
      left: reviewWidth,
      behavior: 'smooth'
    });
    index++; // Reset the scroll position if at the end

    if (index >= reviews.length) {
      setTimeout(function () {
        reviewContainer.scrollTo({
          left: 0,
          behavior: 'instant'
        });
        index = 0;
      }, 2000); // Delay to allow smooth scrolling before reset
    }
  } // Start the auto-scroll with a 2-second interval


  setInterval(scrollToNextReview, 3000); // Adjust interval (in milliseconds) for the auto scroll
});