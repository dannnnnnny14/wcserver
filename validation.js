// var array=[];
var x,firstname,lastname,email,password,password2,checker,checker2,checker3,user;
var user2,pass2;

function redirect2()
{
    document.getElementById("welc").value=user2;
    alert("Successfully logged in. Redirecting to home page...")
   
}
function validate(){

firstname = document.getElementById("first_name").value;
lastname = document.getElementById("last_name").value;
username=document.getElementById("username").value;
email = document.getElementById("email").value;
password = document.getElementById("password").value;
password2 = document.getElementById("password2").value;



checker = firstname.length;
checker2 = lastname.length;
checker3 = user.length;


if (checker>50||checker2>50||checker3>50){
    if(checker>50){
        alert('First name can\'t be more than 50 characters.')
        document.getElementById("first_name").value = "";
    }
    if(checker2>50){
        alert('Last name can\'t be more than 50 characters.')
        document.getElementById("last_name").value = "";
    }
    if(checker3>10){
        alert('Username can\'t be more than 10 characters.')
        document.getElementById("username").value = "";
    }
}
else if(firstname,lastname){
    for (var i = 0; i < firstname.length; i++) {
        if(!isNaN(firstname[i])){
            alert('Number found in first name. Enter name again.')
            document.getElementById("first_name").value = "";
            break
        }
      }
      for (var i = 0; i < lastname.length; i++) {
        if(!isNaN(lastname[i])){
            alert('Number found in last name. Enter name again.')
            document.getElementById("last_name").value = "";
            break
        }
      }
}
if(password.length>=8){
    if(password!=password2){
        alert("Your password and confirmation password do not match. Try again.")
        document.getElementById("password2").value = "";
    }
    else{
    x = 'Successfully signed up.';
    // window.open("login.html");
    alert(x)
    }
}
else {

 
}
// array.push(firstname,lastname,user,email,pass);
}

function login(){

   
    user2=document.getElementById("user_log").value;
    pass2=document.getElementById("your_pass").value;

    checker3 = user2.length;

    if(checker3>10){
        alert('Username can\'t be more than 10 characters.')
        document.getElementById("user_log").value = "";
        document.getElementById("your_pass").value = "";
    }


    }




