

$(".question").click(function(){
	$(this).next().animate({
		height:"toggle",
		opacity: "toggle"},
		"fast");
	$(this).children().toggleClass("collapse");
});



//old code to achieve same end result without using tree traversal
	// slideSelector("#a1");
	// $("#arrow1-down, #arrow1-up").toggleClass("collapse");


// $("#a2, #q2").click(function(){
// 	slideSelector("#a2");
// 	$("#arrow2-down, #arrow2-up").toggleClass("collapse");
// });

// $("#a3, #q3").click(function(){
// 	slideSelector("#a3");
// 	$("#arrow3-down, #arrow3-up").toggleClass("collapse");
// });



//FUNCTIONS
//-----------------------

// function slideSelector(selector) {
// 	$(selector).slideToggle("fast");

// }

 //$ is shorthand for jQuery. calls a function that looks through the DOM for an id or class called q1.
