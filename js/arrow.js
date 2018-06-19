$(document).ready(() => {
  //==========================================
  //-----------------FUNCTIONS-----------------
  //Remove hidden class
  function rmHidden(selector) {
    // Display the hidden items
    $(`.popupInfo ${selector}`).removeClass("hidden");
  }

  /*
    1.Displays right arrow if the first user is displayed
    2.Displays both arrows if users 2-11 are displayed.
    3.Displays left arrow if user #12 is displayed.
  */
  function toggleArrowDisplay(index) {
    if (index === 0) {
      $("#left").prop("disabled",true);
      $("#right").prop("disabled",false);
    } else if (index === 11) {
      $("#right").prop("disabled",true);
      $("#left").prop("disabled",false);
    } else {
      $("#left").prop("disabled",false);
      $("#right").prop("disabled",false);
    }
  }
  //-----------------------------------------------
  /*Removes hidden class from selected elements */
  function displayModalInfo(button) {
    rmHidden(".username");
    rmHidden(".city");
    rmHidden("hr");
    rmHidden(".cell");
    rmHidden(".address");
    rmHidden(".birthday");
    $(".popupInfo .city").addClass("hidden"); //Hide city
  }
  //-----------------------------------------------
  /* Sets the info within the modal */
  let html ="";

  function changeModal(index) {    
      html = $(`#main #${index}`).html();
      $(".popupInfo").attr("id", index);
      $(".popupInfo")
      .html(html);
      $('.modal-content').hide().fadeIn();
  }

  //-------------------------------------------
  //Click event for next/previous
  function changeUser(next) {
    next==="next"?index++:index=index-1;
    toggleArrowDisplay(index);
    toggleArrowDisplay(index);
    changeModal(index);
    displayModalInfo();
  }
  //============================================
  //Click events:

  //----------------------------------------------
  //.user click event displays the arrows depending on index.
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
    toggleArrowDisplay(index);
  });
  //--------------------------------------------
  //Displays next user on click
  $("#right").unbind().on("click", (event)=>
{   
  event.stopPropagation();
  changeUser('next');}
  );

  //--------------------------------------------
  //Displays previous user on click
  $("#left").on("click",()=> changeUser('prev'));

  $('#right').dblclick((e)=>{e.preventDefault();});
  //================================================

  $('#myModal').on('click',()=>$('#myModal').hide());//Hides modal when click outside modal

});
