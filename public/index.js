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
/* Item Listing */

 /* start add-recipe-button */
var pressPlusButton = document.querySelector('#add-recipe-button');
pressPlusButton.addEventListener('click', function() {
	document.getElementById("modal-add-recipe-backdrop").classList.remove('hidden');
	document.getElementById("add-recipe-modal").classList.remove('hidden');
	}
);

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
	var ingredients = "";
	var img_url = document.getElementById("recipe-photo-input").value;
	var caption = document.getElementById("recipe-name-input").value;

	var itemRecipeHTML = Handlebars.templates.item({
		BOOKMARK: bookmark,
		CATEGORIES: categories,
		INGREDIENTS: ingredients,
		IMG_URL: img_url,
		CAPTION: caption
	});

	if(isEmpty()){
		var itemsSection = document.getElementById('items');
		itemsSection.insertAdjacentHTML('beforeend', itemRecipeHTML);
		closeModal();
	}
}


/*ERROR*/
function isEmpty() {
	var addInfo = document.querySelectorAll('.modal-add-recipe-body input');


  for (var i = 0; i < 3; i++) {
		if (addInfo[i].value == "") {
			alert("Please fill out all blanks to add an item.");
			return false;
		}
	}
    return true;
}
/*WORKING*/


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
