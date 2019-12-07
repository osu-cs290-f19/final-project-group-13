//import { request } from "http";

/*
 * Write JS code in this file.
 */

var globalFavoriteFlag = false;
function searchbox_filter(){
	
	var filterInput = document.getElementById("filter-categories").value;
	var value, cgFlag, bkFlag, items, i;

	value = document.getElementById("value").value.toUpperCase();
	items = document.getElementsByClassName('item');

	for(i=0;i<items.length;i++){
		title = items[i].getElementsByClassName("item-title");
		bkFlag = items[i].dataset.bookmark;
		if(filterInput == 'Any'){
			cgFlag = 'Any';
		}else{
			cgFlag = items[i].dataset.categories;
		}

		//console.log('== cgFlag:', cgFlag);

		if(globalFavoriteFlag){
			if(title[0].innerHTML.toUpperCase().indexOf(value) > -1 && bkFlag == 'true' && filterInput == cgFlag){
				items[i].style.display = "inline-block";

			}else{
				items[i].style.display = "none";
			}
		}else{
			if(title[0].innerHTML.toUpperCase().indexOf(value) > -1 && filterInput == cgFlag){
				items[i].style.display = "inline-block";

			}else{
				items[i].style.display = "none";
			}
		}
		
	}

}

$('#bookmark-filter-button').on('click', function() {
	if($(this).attr('class')==="fa-star far"){
		$(this).removeClass('far');
		$(this).addClass('fas');
		globalFavoriteFlag = true;
		searchbox_filter();
	}else{
		globalFavoriteFlag = false;
		$(this).removeClass('fas');
		$(this).addClass('far');
		searchbox_filter();
	}
});

$('#filter-categories').on('click', function() {
	searchbox_filter();
});




 /* start add-recipe-button */
$('#add-recipe-button').on('click', function() {
	$('#modal-add-recipe-backdrop').removeClass('hidden');
	$('#add-recipe-modal').removeClass('hidden');
});

$('#modal-add-recipe-close').on('click', closeModal);
$('#modal-cancel').on('click', closeModal);
$('#modal-add').on('click', addRecipe);

function closeModal() {
	$('#recipe-name-input').val("");
	$('#recipe-photo-input').val("");
	$('recipe-categories-input').val("");
	$('#modal-add-recipe-backdrop').addClass('hidden');
	$('#add-recipe-modal').addClass('hidden');
}

function addRecipe() {
	var bookmark = false;
	var categories = $('#recipe-categories-input').val();
	var ingredients = "placeholder";
	var img_url = $('#recipe-photo-input').val();
	var caption = $('#recipe-name-input').val();

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
				alert("Error saving item on server side: ", + responseBody);
			} else {
				var itemTemplate = Handlebars.templates.item;
				var itemRecipeHTML = itemTemplate({
					BOOKMARK: bookmark,
					CATEGORIES: categories,
					INGREDIENTS: ingredients,
					IMG_URL: img_url,
					CAPTION: caption
				});

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

$('.item').each(function(index) {
	if($(this).attr('data-bookmark')==true){
		var longShitElem = $(this).children('.item-contents').children('.item-button-container').children('#bookmark');
		longShitElem.removeClass('far');
		longShitElem.addClass('fas');
	}
});

$('section').on('click', '#trash', function() {
	var itemElem = $(this).parent().parent().parent();
	var caption = itemElem.attr('data-caption');
	var postRequest = new XMLHttpRequest();
	var requestURL = '/deleteItem';
	postRequest.open('POST', requestURL);

	var requestBody = JSON.stringify({
		CAPTION: caption
	});

	console.log("== Request Body:", requestBody);
	postRequest.setRequestHeader('Content-Type', 'application/json');

	postRequest.addEventListener('load', function (event) {
		console.log("== status:", event.target.status);
		if(event.target.status !== 200){
			var responseBody = event.target.response;
			alert("Error deleting item on server side: ", + responseBody);
		} else {
			itemElem.remove();
		}
	});
	postRequest.send(requestBody);
});


$('section').on('click', '#bookmark', function() {
	console.log("Class:", $(this).attr('class'));

	var itemElem = $(this).parent().parent().parent();
	var caption = itemElem.attr('data-caption');
	var postRequest = new XMLHttpRequest();

	if($(this).attr('class')==="fa-star far"){
		$(this).removeClass('far');
		$(this).addClass('fas');
		itemElem.attr('data-bookmark', true);
		var requestURL = '/addBookmark';
	}else{
		$(this).removeClass('fas');
		$(this).addClass('far');
		itemElem.attr('data-bookmark', false);
		var requestURL = '/deleteBookmark';
	}
	$(this).off('click');

	postRequest.open('POST', requestURL);

	var requestBody = JSON.stringify({
		CAPTION: caption
	});

	console.log("== Request Body:", requestBody);
	postRequest.setRequestHeader('Content-Type', 'application/json');

	postRequest.addEventListener('load', function (event) {
		console.log("== status:", event.target.status);
		if(event.target.status !== 200){
			var responseBody = event.target.response;
			alert("Error applying item on server side: ", + responseBody);
		} else {
			searchbox_filter();
		}
	});
	postRequest.send(requestBody);
	
});



 /* Set the width of the side navigation to 250px */

 /* Set the width of the side navigation to 0 */

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
