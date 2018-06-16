/****** AJAX Callback ******/
let userInfo = "";
$(document).ready(()=>{
$.ajax({
  // get 12 random employees from the random user api
  //Nationality - US / Inc - Includes: name,email, location,date of birth, Cell, Picture.
  url: 'https://randomuser.me/api/?results=12&nat=us&inc=name,email,location,dob,cell,picture',
  dataType: 'json',
  success: function(data) {
    // for each user, add info to userInfo variable
    //Add ID to indicate the index of each user.
	$.each(data.results, (i, user) => {
		userInfo += `<div id="${i}"class="user">
			<img src="${user.picture.medium}">
			<ul>
				<li class="name">${user.name.first} ${user.name.last}</li>
				<li class="email">${user.email}</li>
				<li class="city">${user.location.city}</li>
				<hr class="hidden">
				<li class="cell hidden">${user.cell}</li>
				<li class="address hidden">${user.location.street}<br>${user.location.city}, ${user.location.state} ${user.location.postcode}</li>`;
			//format birthday
			const formatBday = () => {
				let bday = user.dob.toString();
				return bday[5] + bday[6] + '/' + bday[8] + bday[9] + '/' + bday[0] + bday[1] + bday[2] + bday[3];
			};
		userInfo +=	`<li class="birthday hidden">Birthday: ${formatBday()}</li>
			</ul>
        </div>`;
	});
	
	// append the user info to the document
	$('#main').append(userInfo);
  }
});

$('#main').on('click','.user',(e)=>{
    if(e.target.tagName=='DIV'){
var index = e.target.id;
let imgLink = $(`#${index} img`).attr('src');
let name=$(`#${index} .name`).html();

    $('#myModal').css('display','block');
}
else{
    return false;
}
});

$('span').on('click',()=>{
    $('#myModal').css('display','none');
});


});