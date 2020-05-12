
$('body').css("background-image","url('https://images.unsplash.com/photo-1550895030-823330fc2551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')")

$('header').css("background-image","url('https://images.unsplash.com/photo-1517707711963-adf9078bdf01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')")

$('.btn').css("background-image", "url('https://images.unsplash.com/photo-1533628635777-112b2239b1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')")

$('.first-first').append('<h3>Peanut Butter Cups</h3>').append("<button class=video click><a target = '_blank' href='https://tasty.co/recipe/3-ingredient-peanut-butter-cups'>Watch This recipe's Video</a></button>")

$('.first-second').append('<h3>Cookies & Ice Cream Pie</h3>').append("<button class=video click><a target = '_blank' href='https://tasty.co/recipe/3-ingredient-cookies-ice-cream-pie'>Watch This recipe's Video</a></button>")

$('.first-third').append('<h3>Chocolate-Strawberry Braid</h3>').append("<button class=video click><a target = '_blank' href='https://tasty.co/recipe/3-ingredient-chocolate-strawberry-braid'>Watch This recipe's Video</a></button>")

$('.second-first').append('<h3>Microwave Cheesecake</h3>').append("<button class=video click><a target = '_blank' href='https://tasty.co/recipe/5-minute-microwave-cheesecake'>Watch This recipe's Video</a></button>")

$('.second-second').append('<h3>Banana Chocolate French toast</h3>').append("<button class=video click><a target = '_blank' href='https://tasty.co/recipe/banana-chocolate-in-a-mug'>Watch This recipe's Video</a></button>")

$('.second-third').append('<h3>Microwave Mac \'N\' Cheese</h3>').append("<button class=video click><a target = '_blank' href='https://tasty.co/recipe/microwave-5-minute-mac-n-cheese'>Watch This recipe's Video</a></button>")

$('.third-first').append('<h3>Cookies & Cream Mug Cake</h3>').append("<button class=video click><a target = '_blank' href='https://tasty.co/recipe/cookies-cream-mug-cake'>Watch This recipe's Video</a></button>")

$('.third-second').append('<h3>Strawberries & Cream Mug Cake</h3>').append("<button class=video click><a target = '_blank' href='https://tasty.co/recipe/strawberries-cream-mug-cake'>Watch This recipe's Video</a></button>")

$('.third-third').append('<h3>Birthday Cake Mug Cake</h3>').append("<button class=video click><a target = '_blank' href='https://tasty.co/recipe/birthday-cake-mug-cake'>Watch This recipe's Video</a></button>")





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





//var recipes = [first.getElementsByTagName('img'), second.getElementsByTagName('img'), third.getElementsByTagName('img')]
// var dessertsRecipes = popup.children;
//  var arr = first.getElementsByTagName('img');
// var arr2 = 	["<img src='images/peanut-butter-cups.png'>",
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




