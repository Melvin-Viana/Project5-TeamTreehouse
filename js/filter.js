$("document").ready(() => {
  let arrHtml = [];
  let arrNames = [];
  let arrUserNames = [];
  //Events for Dynamic div elements being inserted
  $("#main").on("DOMNodeInserted", ".user", function() {
    //Holds user html
    arrHtml.push($(this).html());
    //Holds usernames in an array
    arrNames.push($("li.name", this).html());
    arrUserNames.push($("li.username", this).html());    });

  //Filter results.
  $("#search").on("click", () => {
    for (let i = 0; i < arrNames.length; i++) {
    
      let strInputValue = ($('input').val()).toLowerCase();
      let name = arrNames[i];
      let userName = arrUserNames[i];
      $(`#main #${i}`).hide();
      if (name.indexOf(strInputValue)!==-1||userName.indexOf(strInputValue)!==-1) {
        $(`#main #${i}`).fadeIn();
      } if ($("input").val() === "") {
        $(`#main #${i}`).fadeIn();
      }
    }
  });
});
