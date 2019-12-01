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
            items[i].style.display = "flex";
            // Items pictures are will show up here..
          }else{
            items[i].style.display = "none";
          }
        }
      }
/* Item Listing */
