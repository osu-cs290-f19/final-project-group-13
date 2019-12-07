//import { request } from "http";

/*
 * Write JS code in this file.
 */
function searchbox_filter(){

	var value, name, item, i;

	value = document.getElementById("value").value.toUpperCase();
	items = document.getElementsByClassName("item");

	for(i=0;i<items.length;i++){
		title = items[i].getElementsByClassName("item-title");
		if(title[0].innerHTML.toUpperCase().indexOf(value) > -1){
			items[i].style.display = "inline-block";

		// Items pictures are will show up here..
		}else{
			items[i].style.display = "none";
		}
	}

}


 /* start add-recipe-button */
var pressPlusButton = document.querySelector('#add-recipe-button');
pressPlusButton.addEventListener('click', function() {
	document.getElementById("modal-add-recipe-backdrop").classList.remove('hidden');
	document.getElementById("add-recipe-modal").classList.remove('hidden');
});

var closeButton = document.querySelector('#modal-add-recipe-close');
closeButton.addEventListener('click', closeModal);

var cancelButton = document.querySelector('#modal-cancel');
cancelButton.addEventListener('click', closeModal);

var addButton = document.querySelector('#modal-add');
addButton.addEventListener('click', addRecipe);

function closeModal() {
	document.getElementById("recipe-name-input").value = "";
	document.getElementById("recipe-photo-input").value = "";
	document.getElementById("recipe-categories-input").value = "";
	document.getElementById("modal-add-recipe-backdrop").classList.add('hidden');
	document.getElementById("add-recipe-modal").classList.add('hidden');
}

function addRecipe() {
	var bookmark = false;
	var categories = document.getElementById("recipe-categories-input").value;
	var ingredients = "placeholder";
	var img_url = document.getElementById("recipe-photo-input").value;
	var caption = document.getElementById("recipe-name-input").value;

	if(!categories || !img_url || !caption){
		alert("Please fill out all blanks to add an item");

	}else{

		var postRequest = new XMLHttpRequest();
		var requestURL = '/addItem';
		postRequest.open('POST', requestURL);

		var requestBody = JSON.stringify({
			BOOKMARK: bookmark,
			CATEGORIES: categories,
			INGREDIENTS: ingredients,
			IMG_URL: img_url,
			CAPTION: caption
		});

		console.log("== Request Body:", requestBody);
		postRequest.setRequestHeader('Content-Type', 'application/json');
		
		postRequest.addEventListener('load', function (event) {
			console.log("== status:", event.target.status);
			if(event.target.status !== 200){
				var responseBody = event.target.response;
				alert("Error saving photo on server side: ", + responseBody);
			} else {
				var itemRecipe = {
					BOOKMARK: bookmark,
					CATEGORIES: categories,
					INGREDIENTS: ingredients,
					IMG_URL: img_url,
					CAPTION: caption
				};

				var itemRecipeHTML = Handlebars.templates.item(itemRecipe);
				var itemsSection = document.getElementById('items');
				itemsSection.insertAdjacentHTML('beforeend', itemRecipeHTML);
			}
		});

		postRequest.send(requestBody);
		closeModal();
	}
}

function addCategories(categories) {
	var filterCategories = document.getElementById("filter-categories");
	var numCategories = filterCategories.length;
	for (var i = 0; i < numCategories; i++) {
		if ((i + 1) == numCategories) {
			filterCategories.options.add(new Option(categories, categories));
		}
	}
}
 /* End add-recipe-button */

 /* Misc Buttons */
 /* work in progress */



$('section').on('click', '#bookmark', function() {
	console.log("Class:", $(this).attr('class'));
	if($(this).attr('class')==="fa-star far"){
		$(this).removeClass('far');
		$(this).addClass('fas');
	}else{
		$(this).removeClass('fas');
		$(this).addClass('far');
	}
	$(this).off('click');
});


 /* Set the width of the side navigation to 250px */
 function openNav() {
   document.getElementById("mySidenav").style.width = "600px";
 }

 /* Set the width of the side navigation to 0 */
 function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
 }
 /* Item Listing */
 // if Push the item container
 // using item-contents

 /*
function open_secondpage(){
	window.location.href = "recipePage";

}

window.addEventListener('DOMContentLoaded', function () {

   var item_contents= document.getElementsByClassName('item-contents');
	 for(var i=0; i < item_contents.length ; i++){

		item_contents[i].addEventListener('click', open_secondpage, true);

	 }


});
*/