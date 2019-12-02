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
	var recipe = document.createElement('div');
	recipe.classList.add('item');

	var recipeNameInput = document.getElementById("recipe-name-input").value;
	var recipePhotoInput = document.getElementById("recipe-photo-input").value;
	var recipeCategoriesInput = document.getElementById("recipe-categories-input").value;
	recipe.setAttribute("data-bookmark", "false");
	recipe.setAttribute("data-categories", recipeCategoriesInput);
	recipe.setAttribute("data-ingredients", "");

	var recipeContents = document.createElement('div');
	recipeContents.classList.add('item-contents');
	recipe.appendChild(recipeContents);

	var recipeImageContainer = document.createElement('div');
	recipeImageContainer.classList.add('item-image-container');
	recipeContents.appendChild(recipeImageContainer);

	var a_img = document.createElement('a');
	a_img.setAttribute("href", "#");
	recipeImageContainer.appendChild(a_img);

	var img = document.createElement('img');
	img.setAttribute("src", recipePhotoInput);
	img.setAttribute("alt", recipeNameInput);
	a_img.appendChild(img);


	var recipeInfoContainer = document.createElement('div');
	recipeInfoContainer.classList.add('item-info-container');
	recipeContents.appendChild(recipeInfoContainer);

	var recipeName = document.createElement('span');
	recipeName.classList.add('item-title');
	recipeName.textContent = recipeNameInput;
	recipeInfoContainer.appendChild(recipeName);

	if(isEmpty()){
		document.getElementById('items').appendChild(recipe);
		addCategories(recipeCategoriesInput);
		postData.push(recipe);
		closeModal();
	}
}

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
