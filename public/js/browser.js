// Using our own JSON API:
// Since the execution of this `app.js` script will be long finished by the time the following `fetch()` call returns data, we need to put our loop inside the second .then(). Check out this CSS Tricks article for the details about what's going on here. 
// https://css-tricks.com/using-fetch/
// fetch('http://localhost:3000/api/travelGoals')
fetch('http://json-byters.herokuapp.com/api/travelGoals')
  .then(function(response) {
    console.log(response);  
    return response.json();
  })
  .then(function(travelGoals) {

    const imgInfoArray = travelGoals;

    // Variable where we will store our img tags
    let imgTemplate = ''; 

    // Flex container for images
    const gallery = document.querySelector('.gallery'); 

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
});

