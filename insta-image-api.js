// const accessToken = 'IGQWRORzRRcmx6bWJQNVVmcXVFV2UyYWw5TU1mU2ZAoVTM5S3M2bHBRdl9QY2tHZAUczSThqM09NVUhDWllSamFQWFZAMTHRXaDFFNFdzR3pYdFlZAWEZAPVWlsMUhTTHkyRE02TTZA2dDIycGRmcDI3ajJoUk9EWll2cWhBX2pIMXBtMzdYZAwZDZD'; 
        //const userId = '6931285016930212';
     

        const apiUrl = `https://graph.instagram.com/v12.0/me/media?fields=id,media_url,thumbnail_url,caption,permalink&access_token=${accessToken}`;

       
          fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              // Handle the data here
              console.log(data);
              if (data.error) {
                  // Handle any error
                  console.error(data.error);
              } else {
               

                 const userMedia = data.data.slice(0, 6); //only six image is fetched
                  userMedia.forEach(media => {
                      // Create an anchor element
                      const anchorElement = document.createElement('a');
                      anchorElement.href = media.permalink;
                      anchorElement.target = '_blank'; // Open in a new tab/window

                      // Create an image element
                      const mediaElement = document.createElement('img');
                      mediaElement.src = media.media_url;

                      // Append the image to the anchor
                      anchorElement.appendChild(mediaElement);

                      // Append the anchor to the gallery container
                      document.getElementById('gallery-image-1').appendChild(anchorElement);
                  });
              }
          })
          .catch(error => {
              // Handle here network error
              console.error(error);
          });