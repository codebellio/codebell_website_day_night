// ---------------------FAQ----------------------------
document.addEventListener("DOMContentLoaded", function () {
    const questionBoxes = document.querySelectorAll(".question-box");
  
    questionBoxes.forEach(function (box) {
      box.addEventListener("click", function () {
        this.classList.toggle("active");
  
      });
    });
  });

  // first section----------------
  document.addEventListener('DOMContentLoaded', function() {
    const mainImageStore = document.querySelector('.main-img-store');
    const miniImages = document.querySelectorAll('.mini-img');

    miniImages.forEach((miniImg, index) => {
        miniImg.addEventListener('click', function() {
            console.log(`Clicked mini image at index: ${index}`);

            // Remove active class from all mini images
            miniImages.forEach(img => img.classList.remove('active-img'));

            // Add active class to the clicked mini image
            miniImg.classList.add('active-img');
            console.log('Active class added to clicked mini image');

            // Get the corresponding image or video source
            const imgElement = miniImg.querySelector('img');
            const videoElement = miniImg.querySelector('video');
            console.log('imgElement:', imgElement);
            console.log('videoElement:', videoElement);

            // Clear the main image store
            mainImageStore.innerHTML = '';
            console.log('Cleared main image store');

            // Update the main image store with the clicked image or video
            if (imgElement && !videoElement) {
                const newMainImg = document.createElement('img');
                newMainImg.src = imgElement.src;
                mainImageStore.appendChild(newMainImg);
                console.log('Updated main image store with new image');
            } else if (videoElement) {
                const newMainVideo = document.createElement('video');
                newMainVideo.src = videoElement.src;
                newMainVideo.autoplay =false;
                newMainVideo.loop = true;
                newMainVideo.controls = true; // Optional: add controls for video
                mainImageStore.appendChild(newMainVideo);
                console.log('Updated main image store with new video');
            }
        });
    });
});





  // -----sidebar------
  document.getElementById("menu-icon").addEventListener("click", function() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.maxHeight = sidebar.scrollHeight + "px";
    document.getElementById("overlay").classList.add("active");
});

document.getElementById("overlay").addEventListener("click", function() {
    document.getElementById("sidebar").style.maxHeight = "0";
    this.classList.remove("active");
});

document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("sidebar").style.maxHeight = "0";
    document.getElementById("overlay").classList.remove("active");
});

// -----------on scroll navbar --------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav-container');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
          nav.classList.add('scrolled');
      } else {
          nav.classList.remove('scrolled');
      }
  });
});

document.addEventListener('scroll', function() {
    const firstSection = document.getElementById('hero-bg');
    const button = document.getElementById('show-on-scroll');
    
    // Get the position where we want to show the button
    const scrollPosition = firstSection.offsetHeight ;
    
    if (window.scrollY >= scrollPosition) {
        button.style.opacity = '1';
    } else {
        button.style.opacity = '0';
    }
});


  //--- --english hindi button selection --------------------------------





document.addEventListener('DOMContentLoaded', function () {
    const reviewContainer = document.querySelector('.cards');
    const reviews = document.querySelectorAll('.card');
    const reviewWidth = reviews[0].offsetWidth + parseInt(getComputedStyle(reviews[0]).marginRight); // Calculate width including margin
    const containerWidth = reviewContainer.offsetWidth;
    const visibleCardsCount = Math.floor(containerWidth / reviewWidth);
    const totalCards = reviews.length;
    let index = 0;
  
    // Clone the reviews to create a seamless loop
    reviews.forEach(review => {
        const clone = review.cloneNode(true);
        reviewContainer.appendChild(clone);
    });
  
    // Function to scroll to the next review
    function scrollToNextReview() {
        reviewContainer.scrollBy({
            left: reviewWidth,
            behavior: 'smooth'
        });
  
        index++;
  
        // Reset the scroll position if at the end
        if (index >= totalCards) {
            setTimeout(() => {
                reviewContainer.scrollTo({ left: 0, behavior: 'instant' });
                index = 0;
            }, 1500); // Delay to allow smooth scrolling before reset
        }
    }
  
    // Check the visible cards and decide whether to start auto-scrolling
    if ((window.innerWidth < 768 && visibleCardsCount <= 1) || (window.innerWidth >= 768 && visibleCardsCount < totalCards)) {
        setInterval(scrollToNextReview, 1500); // Adjust interval (in milliseconds) for the auto scroll
    }
  });
  





document.addEventListener('DOMContentLoaded', function () {
  const reviewContainer = document.querySelector('.review-cards');
  const reviews = document.querySelectorAll('.review-card');
  const reviewWidth = reviews[0].offsetWidth + parseInt(getComputedStyle(reviews[0]).marginRight); // Calculate width including margin
  let index = 0;

  // Clone the reviews to create a seamless loop
  reviews.forEach(review => {
      const clone = review.cloneNode(true);
      reviewContainer.appendChild(clone);
  });

  // Function to scroll to the next review
  function scrollToNextReview() {
      reviewContainer.scrollBy({
          left: reviewWidth,
          behavior: 'smooth'
      });

      index++;

      // Reset the scroll position if at the end
      if (index >= reviews.length) {
          setTimeout(() => {
              reviewContainer.scrollTo({ left: 0, behavior: 'instant' });
              index = 0;
          }, 2000); // Delay to allow smooth scrolling before reset
      }
  }

  // Start the auto-scroll with a 2-second interval
  setInterval(scrollToNextReview, 3000); // Adjust interval (in milliseconds) for the auto scroll
});


