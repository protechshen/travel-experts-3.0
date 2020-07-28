    // Variable where we will store our img tags
    let footerString = ''; 

    // Flex container for images
    const footer = document.querySelector('.gallery'); 

    // Loop through items using forEach (available on every array)
    imgInfoArray.forEach(function(item){
      imgTemplate += 
        `<div>
          <a href="${item.id}">
            <img src="https://picsum.photos/id/${item.id}/600" alt="${item.altText}">
          </a>
          <a href="${item.linkURL}" target="blank">
            <p>${item.description}</p>
          </a>
        </div>`;
    });

    // Add HTML img string to gallery container
    gallery.innerHTML = imgTemplate;