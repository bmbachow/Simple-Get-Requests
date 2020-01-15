'use strict';

function getDogImage() {
  fetch(`https://dog.ceo/api/breeds/image/random/${dogimgs.value}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm()
{ $('form').submit(event => { event.preventDefault(); 
  console.log(document.getElementById('dogimgs').value); 
  getDogImage();
});
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});




/* 

have form where user selects a number between 1 and 50 that defaults to 3

user selects number and clicks submit

app shows that number of random dog images

*/