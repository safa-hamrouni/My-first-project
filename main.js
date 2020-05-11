 $('body').css("background-image","url('https://images.unsplash.com/photo-1550895030-823330fc2551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')")
$('header').css("background-image","url('https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')")

 //var recipes = ["first", "#second", "#third"]
 //var imgContent = ["first-first", "first-second", "first-third", "second-first", "second-second", "second-third", "third-first", "third-second", "third-third"]


$(".first-first img").on("click", function(){
	$("#popup").addClass("active").append("<img src='images/peanut-butter-cups.png'>").fadeIn()
})
$("#popup .close").on("click", function(){
	$("#popup").removeClass("active")
})


