/****** AJAX Callback ******/
let userInfo = "";
$(document).ready(()=>{
$.ajax({
  // get 12 random employees from the random user api
  //Nationality - US / Inc - Includes: name,email, location,date of birth, Cell, Picture.
  url: 'https://randomuser.me/api/?results=12&nat=us&inc=name,email,location,dob,cell,picture,login',
  dataType: 'json',
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
    var index;
    //If the user clicks the div place the index with a variable.
    e.target.tagName=='DIV'?
        //Place the id in index.
        index=e.target.id:    
        //Otherwise  
        index=e.target.parentNode.parentNode.id;  



//This variable will hold the html
let html=$(`#${index}`).html();



$('.popupInfo').html(html);
//Display the modal window.
$('.popupInfo .city').addClass('hidden');
$('.popupInfo .username').removeClass('hidden');
$('.popupInfo hr').removeClass('hidden');
$('.popupInfo .cell').removeClass('hidden');
$('.popupInfo .address').removeClass('hidden');
$('.popupInfo .birthday').removeClass('hidden');


$('#myModal').css('display','block');
console.log($(`#${index}`).html());
});

$('span').on('click',()=>{
    $('#myModal').css('display','none');

});


});