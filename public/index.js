//import { request } from "http";

/*
 * Write JS code in this file.
 */
// <<<<<<< Hong
// function searchbox_filter() {

//   var value, name, item, i;

//   value = document.getElementById("value").value.toUpperCase();
//   items = document.getElementsByClassName("item");

//   for (i = 0; i < items.length; i++) {
//     title = items[i].getElementsByClassName("item-title");
//     if (title[0].innerHTML.toUpperCase().indexOf(value) > -1) {
//       items[i].style.display = "inline-block";

//       // Items pictures are will show up here..
//     } else {
//       items[i].style.display = "none";
//     }
//   }
// =======

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

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}





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

