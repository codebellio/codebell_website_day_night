


const apiUrl = `https://graph.instagram.com/v12.0/me/media?fields=id,media_url,thumbnail_url,caption,permalink&access_token=${accessToken}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const userMedia = data.data.slice(0, 6); // Limit to 6 images

    const galleryContainer = document.getElementById("gallery-image-1");
    userMedia.forEach((media) => {
      // Create an anchor element for each image 
      const anchorElement = document.createElement("a");
      anchorElement.href = "#";
      anchorElement.addEventListener("click", function (e) {
        e.preventDefault();
        openPopup(media.media_url, media.caption, media.permalink);
      });

      //creating image for the gallery
      const galleryImageElement = document.createElement("img");
      galleryImageElement.src = media.media_url; // Use thumbnail for gallery

      anchorElement.appendChild(galleryImageElement);
      galleryContainer.appendChild(anchorElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching Instagram data: ", error);
  });

// open model pop up
function openPopup(imageUrl, caption, postLink) {
  const modal = document.getElementById("popupModal");
  const popupImage = document.getElementById("popupImage");
  const popupCaption = document.getElementById("popupCaption");
  const fullPostLink = document.getElementById("fullPostLink");

  popupImage.src = imageUrl;
  popupImage.alt = caption; 
  popupCaption.textContent = caption;
  fullPostLink.href = postLink;

  modal.style.display = "block";
}

//close pop up
function closePopup() {
  const modal = document.getElementById("popupModal");
  modal.style.display = "none";
}

//close func
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closePopup);