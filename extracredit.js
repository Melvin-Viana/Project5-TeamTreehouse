//Employee Directory- Project 5
//Start Date: June 13, 2018
//Last Update: June 16, 2018
$(document).ready(() => {
  let arrHtml = [];
  let arrNames = [];
  let arrOldIndexes = [];
  let i = 0;

  //Events for Dynamic div elements being inserted
  $("#main").on("DOMNodeInserted", ".user", function() {
    //Holds user html
    arrHtml.push($(this).html());
    //Holds usernames in an array
    arrNames.push($("li.name", this).html() + i); // Last character (i) holds the index within #main
    i++;
  });
  /*--------------------------------------------
Sort button. 
Sorts the nameArray
Unbinds DOMInserted event for .user divs.
*/

  //Sorts the users by name onClick
  $("#title").on("click", "button", () => {
    //Sort the names.
    arrNames.sort();
    //Ensures that elements in arrayName and arrHtml does not change.
    $("#main").off("DOMNodeInserted");
    //Loop through array and extract indexes.
    for (let i = 0; i < arrNames.length; i++) {
      //Utilize RegEx to find numbers in the string.
      arrOldIndexes.push(arrNames[i].match(/\d+/g).toString());

      const index = arrOldIndexes[i];

      //Change the div.user html to alphebtical order
      $(`#main #${i}`).html(arrHtml[index]);
    }
  });
  let index;
  //----------------------------------------------
  $("#main").on("click", ".user", e => {
    //If the user clicks the div place the index with a variable.
    if (e.target.tagName == "DIV") {
      //Place the id in index.
      index = e.target.id;
    } else if (e.target.tagName === "IMG") {
      index = e.target.parentNode.id;
    } else {
      //Otherwise
      index = e.target.parentNode.parentNode.id;
    }
    index = parseInt(index);
    if(index === 0){
        $('#left').addClass('hidden');
        $('#right').addClass('m-auto');
        $('#right').removeClass('hidden');
    }
    else if(index===11){
        $('#right').addClass('hidden');
        $('#left').addClass('m-auto');    
        $('#left').removeClass('hidden');}
    else{
        $('#left').removeClass('hidden');
        $('#right').removeClass('hidden');
        $('#left').addClass('mr-auto');
    }    
    });
});
