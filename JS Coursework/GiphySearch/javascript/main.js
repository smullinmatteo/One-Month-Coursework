/* 1. Grab the input value */

input = document.querySelector("input").value;
console.log(input)

document.querySelector(".js-go").addEventListener('click', function(){
	input = document.querySelector("input").value;
	pushToUrl(input);
});

document.querySelector(".js-userinput").addEventListener('keyup', function(event){
	input = document.querySelector("input").value;

	if(event.key === 'Enter') {
		pushToUrl(input);
	}
});

/* 2. do the data stuff with the API */
function pushToUrl(shrek){

	url = "http://api.giphy.com/v1/gifs/search?q=" + shrek + "&api_key=Y5JWmLY7z5ZKZvQ7L4dedPncYKytSOVE";

	// AJAX Request
	GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load',function(e){

	  data = e.target.response;
	  pushToDOM(data);
	});
};





/* 3. Show me the GIFs */

function pushToDOM(donkey){

	response = JSON.parse(donkey);
	imageUrls = response.data;
	container = document.querySelector(".js-container");

	imageUrls.forEach(function(image,i){

		src = image.images.fixed_height.url;
		console.log(src);
		setTimeOut((i) => {
			container.innerHTML = "<img src =\"" + src + "\" class=\"container-image\">";
		},i*3000);

	});
};