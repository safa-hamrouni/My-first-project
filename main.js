var recipeList = [$("#first"), $("#second"), $("#third")]



$('body').css("background-image", "url('https://images.unsplash.com/photo-1550895030-823330fc2551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')")
$('header').css('background-image', "url('https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')")

var content = $(".content").append("<img src='images/peanut-butter-cups.png'>")

$(".first-first").on("click", function(){
	$(".overlay first-first").addClass("active")
})
// $(".close .overlay").on("click", function(){
// 	$(".overlay content").removeClass("active")
// })


// document.getElementsByClassName("first-first")[0].addEventListener("click", fucntion(){
// 	console.log("hello")
// });

