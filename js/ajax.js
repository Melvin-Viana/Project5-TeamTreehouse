$(document).ready(() => {
  let userInfo = "";
  let counter = 1;
  $.ajax({
    // get 12 random employees from the random user api
    //Nationality - US / Inc - Includes: name,email, location,date of birth, Cell, Picture, login object.
    url:
      "https://randomuser.me/api/?results=12&nat=us&inc=name,email,location,dob,cell,picture,login",
    dataType: "json",
    success: function(data) {
      // for each user, add info to userInfo variable
      //Add ID to indicate the index of each user.
      $.each(data.results, (i, user) => {
        userInfo += `<div id="${i}"class="user">
              <img src="${user.picture.large}">
              <ul>
                  <li class="name">${user.name.first} ${user.name.last}</li>
                  <li class="username hidden">${user.login.username}</li>
                  <li class="email">${user.email}</li>
                  <li class="city">${user.location.city}</li>
                  <hr class="hidden">
                  <li class="cell hidden">${user.cell}</li>
                  <li class="address hidden">${user.location.street}<br>${
          user.location.city
        }, ${user.location.state} ${user.location.postcode}</li>`;
        //format birthday
        const formatBday = () => {
          let bday = user.dob.date.toString();
          return (
            bday[5] +
            bday[6] +
            "/" +
            bday[8] +
            bday[9] +
            "/" +
            bday[0] +
            bday[1] +
            bday[2] +
            bday[3]
          );
        };
        userInfo += `<li class="birthday hidden">Birthday: ${formatBday()}</li>
              </ul>
          </div>`;
      });

      // append the user info to the document
      $("#main").hide().append(userInfo + "</div>").fadeIn();
    
    }
  });
});
