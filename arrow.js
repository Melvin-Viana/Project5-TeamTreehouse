$(document).ready(()=>{
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
      $("#left").addClass("hidden");
      $("#right").addClass("m-auto");
      $("#right").removeClass("hidden");
    } else if (index === 11) {
      $("#right").addClass("hidden");
      $("#left").addClass("m-auto");
      $("#left").removeClass("hidden");
    } else {
      $("#left").removeClass("hidden");
      $("#right").removeClass("hidden");
      $("#left").addClass("mr-auto");
    }
  }
//-----------------------------------------------
  /*Removes hidden class from selected elements */
  function displayModalInfo() {
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
  function changeModal(index) {
    var html = $(`#main #${index}`).html();
    $(".popupInfo").attr("id", index);
    $(".popupInfo").hide().fadeIn().html(html);
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
  $("#right").on("click", () => {
    index = index + 1;
    toggleArrowDisplay(index);
    toggleArrowDisplay(index);
    changeModal(index);
    displayModalInfo();
  });

  //--------------------------------------------
  //Displays previous user on click
  $("#left").on("click", () => {
    index = index - 1;
    toggleArrowDisplay(index);
    changeModal(index);
    displayModalInfo();
  });
//================================================
  

});