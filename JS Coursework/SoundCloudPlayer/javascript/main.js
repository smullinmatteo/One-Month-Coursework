// STEP 1. SEARCH SOUNDCLOUD


// STEP 2. QUERY SOUNDCLOUD API

var SoundCloudAPI = {};

SoundCloudAPI.initialize = function() {

	SC.initialize({
	  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
	});

}

SoundCloudAPI.initialize();

SoundCloudAPI.getTrack = function(inputValue) {

	// find all sounds of buskers licensed under 'creative commons share alike'
	SC.get('/tracks', {
	  q: inputValue
	}).then(function(tracks) {
	  console.log(tracks);
	});

}

SoundCloudAPI.getTrack("Rilo Kiley");

// STEP 3. DISPLAY RESULTS AS CARDS

// STEP 4. ADD SELECTED TO PLAYLIST AND AUTO PLAY

