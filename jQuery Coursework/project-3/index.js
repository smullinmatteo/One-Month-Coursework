$(document).ready(function () {

	$("#list-items").html(localStorage.getItem("listItems"));

    $(".add-items").submit(function(event) {
    	event.preventDefault();

    	var item = $("#todo-list-item").val(); //var makes this a local function exclusive variable. omiting var makes this a global variable
	    
	    if (item !== null && item !== '') { 
	    	//we could have just done if(item) which will return true so long as there is something in input.
	    	$("#list-items").append("<li><input class='checkbox' type = 'checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
    		localStorage.setItem("listItems",$("#list-items").html());
    		$("#todo-list-item").val("");

	    	if (item == "dance") {
	    		console.log(item);
	    		//create a new divider and surprise with a gif
	    		var newDivider = document.createElement('div');
		    	newDivider.classList.add('container');
				var gifImage = document.createElement('img');
		    	gifImage.src = "https://media.giphy.com/media/TXrm00Yl03f68/giphy.gif";
		    	newDivider.appendChild(gifImage);
		    	const currentDiv = document.getElementById('searchdiv');
		    	document.body.insertBefore(newDivider,currentDiv.nextSibling);
		    };  
	    };
    });

    $(document).on("change", ".checkbox", function(){ //need to do this for dynamically created elements
    	if ($(this).attr("checked")) { //reviews check status
    		$(this).removeAttr("checked")
    	} else {
    		$(this).attr("checked", "checked");
    	}
    	
    	$(this).parent().toggleClass("completed");
    	localStorage.setItem("listItems",$("#list-items").html()); //gives the parent of the checkbox which is the list item
		});

    $(document).on("click", ".remove", function(){ 
	  $(this).parent().fadeTo(500, 0.01, function(){ 
    	$(this).slideUp(150, function() {
        	$(this).remove();
        	});
    	});
	  localStorage.setItem("listItems",$("#list-items").html());
	});
});