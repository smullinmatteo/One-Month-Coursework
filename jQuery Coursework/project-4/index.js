$(document).ready(function() {
    $.ajax({
    	url:"https://api.jsonbin.io/b/5e99f36b5fa47104cea282ff/3",
    	dataType: "json",
    	success: function(response) {
    		$.each(response.apartments, function(i, apartment) {
    			var apartmentClass = apartment.city.toLowerCase().replace (" ", "-");
  				var listing = "<a href='#' id=" + apartment.id + " class='list-group-item " + apartmentClass + " listings'><h4 class='list-group-item-heading'>" + apartment.description + " | " + apartment.bedrooms + " BR | " + apartment.price + "</h4><p class='list-group-item-text'>" + apartment.neighborhood + "</p></a>";
  				$('.apartments').append(listing);
    		});
    	},
    	error: function(error) {
    		console.log(error);
    	}
    });

    $(".filter").click(function() {
    	$(".filter").removeClass("active"); //removes the highlight.
    	$(this).addClass("active"); //add the highlight to whatever button/filter we select
    	
    	$(".listings").show();

    	var city = $(this).attr("id"); //grabs the pseudo city button id/filter
    	if (city !=="all") { //listens for if all filter is selected. if not, execute the filter.
    		$(".listings").not("." + city).css("display", "none"); //makes a class out of city and then checks it against the classes in each listing. So class manhattan will be filtered out if the city chosen is brooklyn

    	}
    });

    $(document).on("click", ".listings", function(){
    	var id = $(this).attr("id");
    	$.ajax({
	    	url:"https://api.jsonbin.io/b/5e99f36b5fa47104cea282ff/3",
	    	dataType: "json",
	    	success: function(response) {
	    		var selectedApartment = $.grep(response.apartments, function(apartment){
	    			return apartment.id == id;
	    		})
	    		var address = selectedApartment[0].address;

	    		//shows a bootstrap js modal that asks the user for the ok to open a new browser tab with the google maps location
	    		$('#myModal').modal('show');
	    		$(".approvebutton").click(function() {
	    			window.open("http://maps.google.com/?q=" + address);
					} 
	    	)},
	    	error: function(error) {
	    		console.log(error);
	    	}
	    });
    });

});