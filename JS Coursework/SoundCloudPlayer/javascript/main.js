// STEP 1. SEARCH SOUNDCLOUD

UI = {};

UI.enterPress = function(){
	document.querySelector(".js-search").addEventListener('keyup', function(event){
	input = document.querySelector("input").value;
		if(event.key === 'Enter') {
		SoundCloudAPI.getTrack(input);
		};
	});
};

UI.submitClick = function(){
	document.querySelector(".js-submit").addEventListener('click', function(){
	input = document.querySelector("input").value;
	SoundCloudAPI.getTrack(input);
	});
};

// STEP 2. QUERY SOUNDCLOUD API

SoundCloudAPI = {};

SoundCloudAPI.initialize = function() {

	SC.initialize({
	  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
	});
}

SoundCloudAPI.getTrack = function(inputValue) {

	// find all sounds of buskers licensed under 'creative commons share alike'
	SC.get('/tracks', {
	  q: inputValue
	}).then(function(tracks) {
	  console.log(tracks);
	  SoundCloudAPI.renderTracks(tracks);
	});
}

//SoundCloudAPI.getTrack(input);

SoundCloudAPI.renderTracks = function(tracks) {

	tracks.forEach(function(track){

		//create card
		card = document.createElement('div');
		card.classList.add('card');

		//create image
		imageDiv = document.createElement('div');
		imageDiv.classList.add('image');

		image_img = document.createElement('img');
		image_img.classList.add('image_img');
		image_img.src = track.artwork_url || 'https://edm.com/.image/t_share/MTU5NDY5Nzk2NTUzOTI1OTA1/soundcloud.png';
		imageDiv.appendChild(image_img);

		//content
		content = document.createElement('div');
		content.classList.add('content');

		header = document.createElement('div');
		header.classList.add('header');
		header.innerHTML = '<a href="' + track.permalink_url +'target="_blank">' + track.title + '</a>';

		//button
		button =document.createElement('div');
		button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');

		icon = document.createElement('div');
		icon.classList.add('add', 'icon');

		buttonText = document.createElement('span');
		buttonText.innerHTML = 'Add to Playlist';


// STEP 3. DISPLAY RESULTS AS CARDS
		//appendall
		content.appendChild(header);
		button.appendChild(buttonText);

		button.addEventListener('click', function(){
			SoundCloudAPI.getEmbed(track.permalink_url);
		});

		card.appendChild(imageDiv);
		card.appendChild(content);
		card.appendChild(button);

		searchResults = document.querySelector('.js-search-results');
		searchResults.appendChild(card);

	});
}

// STEP 4. ADD SELECTED TO PLAYLIST AND AUTO PLAY

SoundCloudAPI.getEmbed = function(trackURL) {
	console.log('click');
	SC.oEmbed(trackURL, {
  	auto_play: true
	}).then(function(embed){
  	console.log('oEmbed response: ', embed);

  	sideBar = document.querySelector('.js-playlist');
  	box = document.createElement('div');
  	box.innerHTML = embed.html;

  	sideBar.insertBefore(box, sideBar.firstChild);

  	localStorage.setItem("key", sideBar.innerHTML);
	});
};


//call object functions

SoundCloudAPI.initialize();
UI.enterPress();
UI.submitClick();

//reload stored playlist to sidebar

sideBar=document.querySelector(".js-playlist");

sideBar.innerHTML = localStorage.getItem("key");
