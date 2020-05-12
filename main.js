$('body').css("background-image","url('https://images.unsplash.com/photo-1550895030-823330fc2551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')")
$('header').css("background-image","url('https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')")
$('.btn').css("background-image", "url('https://images.unsplash.com/photo-1533628635777-112b2239b1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')")
$('.first-first').append('Peanut Butter Cups')
$('.first-second').append('Cookies & Ice Cream Pie')
$('.first-third').append('Chocolate-Strawberry Braid')
$('.second-first').append('Microwave Cheesecake')
$('.second-second').append('Banana Chocolate French toast')
$('.second-third').append('Microwave Mac \'N\' Cheese')
$('.third-first').append('Cookies & Cream Mug Cake')
$('.third-second').append('Strawberries & Cream Mug Cake')
$('.third-third').append('Birthday Cake Mug Cake')





function openAndClosePopup(imgChild, img){
	$(imgChild).on("click", function(){
		if(!$("#popup").hasClass("active")){
	$("#popup").addClass("active").append(img).fadeIn()
		}
	$("#popup .close").on("click", function(){
		$("#popup").removeClass("active");
		$("#popup img").remove()
		})
	})
}

openAndClosePopup(".first-first img", "<img src='images/peanut-butter-cups.png'>")
openAndClosePopup(".first-second img", "<img src='images/chocolate-ice-cream-pie.png'>")
openAndClosePopup(".first-third img", "<img src='images/Strawberry-Choco-braid.png'>")
openAndClosePopup(".second-first img", "<img src='images/cheese-cake.png'>")
openAndClosePopup(".second-second img", "<img src='images/Banana-choco-french-toast.png'>")
openAndClosePopup(".second-third img", "<img src='images/mac-n-cheese.png'>")
openAndClosePopup(".third-first img", "<img src='images/chocolate-hazelnut.png'>")
openAndClosePopup(".third-second img", "<img src='images/strawberry-cream.png'>")
openAndClosePopup(".third-third img", "<img src='images/Bday-cake.png'>")






// var dessertsRecipes = popup.children;
//  var arr = first.getElementsByTagName('img');
// var arr2 = 		["<img src='images/peanut-butter-cups.png'>",
// 				"<img src='images/chocolate-ice-cream-pie.png'>",
// 				"<img src='images/Strawberry-Choco-braid.png'>",

// 				"<img src='images/cheese-cake.png'>",
// 				"<img src='images/Banana-choco-french-toast.png'>",
// 				"<img src='images/mac-n-cheese.png'>", 

// 				"<img src='images/chocolate-hazelnut.png'>",
// 				"<img src='images/strawberry-cream.png'>",
// 				"<img src='images/Bday-cake.png'>"];

// function changePopup(arr, arr2){
// 	for(var i=0; i<arr.length; i++){
// 		for(var j=0; arr2< arr2.length; i++)
// 			if (i=j){
// 				return openAndClosePopup(arr[i],arr2[j])
// 			}
// 		}
		
// 	}
// 	changePopup(arr,arr2)




