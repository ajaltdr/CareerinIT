// jQuery for local storage
function valf(){
var sn=1;
	// using id from form 
     var inputEmail= document.getElementById("Email");
     localStorage.setItem("Email", inputEmail.value);

     var inputFirst= document.getElementById("FirstName");
     localStorage.setItem("FirstName", inputFirst.value);

     var inputLast= document.getElementById("LastName");
     localStorage.setItem("LastName", inputLast.value);

     var inputPassword= document.getElementById("Password");
     localStorage.setItem("Password", inputPassword.value);

     var inputConfirm= document.getElementById("Confirm");
     localStorage.setItem("Confirm", inputConfirm.value);

     var inputDate= document.getElementById("Date");
     localStorage.setItem("Date", inputDate.value);

     var inputCategory= document.getElementById("Category");
     localStorage.setItem("Category", inputCategory.value);

sn++ ;

}

