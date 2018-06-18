/****** AJAX Callback ******/
$(document).ready(() => {
 

  $("#main").on("click", ".user", e => {
    //Utilize this function to remove hidden class in modals
    function showInModal(selector) {
      // Display the hidden items
      $(`.popupInfo ${selector}`).removeClass("hidden");
    }

    let index;
    let target;
    //If the user clicks the div place the index with a variable.
    if(e.target.tagName == "DIV")
       //Place the id in index.
      {  index = e.target.id;
         target = e.target;
      }
    else if(e.target.tagName==="IMG"){
         index=e.target.parentNode.id;
         target = e.target.parentNode;
    }  
    else{ //Otherwise
          index = e.target.parentNode.parentNode.id;
          target= e.target.parentNode.parentNode;
      }
        

    //This variable will hold the html
    let html = target.innerHTML;
    $(".popupInfo").attr('id',index);
    $(".popupInfo").html(html);
    
    //Remove hidden class on these classes.
    showInModal(".username");
    showInModal(".city");
    showInModal("hr");
    showInModal(".cell");
    showInModal(".address");
    showInModal(".birthday");
    $(".popupInfo .city").addClass("hidden"); //Hide city
    //Display whole modal
    $("#myModal").css("display", "block");
    console.log();
  });

  //Hide modal form when "X" is clicked.
  $("span.close").on("click", () => {
    $("#myModal").css("display", "none");
  });

  
});
