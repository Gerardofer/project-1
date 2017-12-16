//===================  THIS WORKS!!!!  ==============================
// console.log("HOW ARE YOU?!!!")

// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://developers.zomato.com/api/v2.1/search",
//   "method": "GET",
//   "headers": {
//   	'Accept': 'application/json',
//   	'user-key': '9c970e3eb424d3ff10647961115929c1'
//   }
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
//   $('#imgSearch').append(response.restaurants[0].restaurant.photo_url)
// });

//=====================================================================
$(document).ready(function(){

var userSearch = $(this).attr('data-user');
var settings
var pos;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
      };
      console.log(pos.lat);
      console.log(pos.lng);
      userPosition();
    })
  } 

// $('#userSubmit').on('click', function(){
//   	var result = $('#user-input').val().trim()
//   	$('#rest-reviews').append(result);

function userPosition(){

  $('#userSubmit').on('click', function(){
    var result = $('#user-input').val().trim()
    $('#rest-reviews').append(result);

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + result + "&latitude=" + pos.lat + "&longitude=" + pos.lng + "&limit=5",
    "method": "GET",
    "headers": {
      "authorization": "Bearer p7FLN3mZ05l12noAsPo9XnkpnHonn_1O2asNEkYcBDuW0NcQNcilhY-zp0zhaSOTm-TkYVceqKZnzPzUMQorpxo6w8hOWNhc-TYT2tIaYlYbHMnLgcgh-0uDTxczWnYx",
      "Cache-Control": "no-cache",
      "Postman-Token": "486cc89e-9d50-c747-f79a-a8e008227e22"
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response);

    var dataObj = response.businesses
    var localList = dataObj;
    console.log(dataObj)

    	for (var i = 0; i < dataObj.length; i++){
    		var infoDisplay = $('<div>');
    		var name = $('<h2>' + dataObj[i].name + '</h2>');
    		for (var j = 0; j < dataObj[i].location.display_address.length; j++){
          $('.card-content').append('<hr>');
    				$('.card-content').append('<p>' + dataObj[i].location.display_address[j] + '</p>');
    			}
    		var phone = $('<p>' + dataObj[i].display_phone + '</p>');
    		var image = $('<img class="pic-result">').attr('src', dataObj[i].image_url);
    		// var url = $('<p>' + dataObj[i].url + '</p>');
    		var rating = $('<p>' + dataObj[i].rating + '</p>');
    		var price = $('<p>' + dataObj[i].price + '</p>');

    		$('.card-content').append(image, name, phone, rating, price);
    		
    	}
    	
    })
  
  });
}
});

// Yelp API calls
// Client ID
// kzmwgxpJAqAu6yt1U0iBTg

// API Key 
// p7FLN3mZ05l12noAsPo9XnkpnHonn_1O2asNEkYcBDuW0NcQNcilhY-zp0zhaSOTm-TkYVceqKZnzPzUMQorpxo6w8hOWNhc-TYT2tIaYlYbHMnLgcgh-0uDTxczWnYx

// Client Secret
// SmQODi9RjRYTHRJomfBAUUTGfsniYKD4nvwx3U0CFLepUK7hejTbo8DMFSkGpF5N



