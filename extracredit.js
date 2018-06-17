//Employee Directory- Project 5
//Start Date: June 13, 2018
//Last Update: June 16, 2018
$(document).ready(()=>{
 let arrHtml =[];
 let arrNames=[];
 let arrOldIndexes=[];
 let i=0;

    //Events for Dynamic div elements being inserted
    $('#main').on('DOMNodeInserted', '.user', function(){
        //Holds user html
        arrHtml.push($(this).html());
        //Holds usernames in an array
        arrNames.push($('li.name',this).html()+i);// Last character (i) holds the index within #main
        i++;

    });
/*--------------------------------------------
Sort button. 
Sorts the nameArray
Unbinds DOMInserted event for .user divs.
*/    

    //Sorts the users by name onClick
    $('#title').on('click','button',()=>{
        
        //Sort the names.
        arrNames.sort();
        //Ensures that elements in arrayName and arrHtml does not change.
        $('#main').off('DOMNodeInserted');
       //Loop through array and extract indexes.
       for(let i=0; i<arrNames.length;i++){
           //Utilize RegEx to find numbers in the string.
            arrOldIndexes.push(arrNames[i].match(/\d+/g).toString());

            const index = arrOldIndexes[i];

           //Change the div.user html to alphebtical order
            $(`#main #${i}`).html(arrHtml[index]);
       }
       console.log(arrHtml[0]);
    });
  

});