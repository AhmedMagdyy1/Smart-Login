var signUpName = document.getElementById('signUpName');
var signUpEmail = document.getElementById('signUpEmail');
var signUpPass = document.getElementById('signUpPass');
var users = [];
var emailValidation = document.getElementById('emailExist');

if (JSON.parse(localStorage.getItem('usersInfo')) == null){
    users = [];
}
else {
    users = JSON.parse(localStorage.getItem('usersInfo'));
}
/* ------------For SignUp-------------*/
function signUp(){
    for(var i = 0 ; i < users.length ; i++){
        if(users[i].email.toLowerCase() == signUpEmail.value.toLowerCase()){
            emailValidation.innerHTML = `<span class="text-danger my-3">Email already exists</span>`
            return false
        }
    }
    if (signUpName.value == '' ||  signUpEmail.value == '' || signUpPass.value == ''){
        emailValidation.innerHTML = `<span class="text-danger my-3">All inputs is required</span>`
    }
    else {
        emailValidation.innerHTML = `<span class="text-success my-3">Success</span>`
        getUserData();
    }
}
function getUserData(){
    var user = {
        name : signUpName.value,
        email : signUpEmail.value,
        pass : signUpPass.value,
    }
    users.push(user);
    localStorage.setItem('usersInfo',JSON.stringify(users));
}
/* ------------For SignIn-------------*/
var signInEmail = document.getElementById('signInEmail');
var signInPass = document.getElementById('signInPass');
var  checkInValid = document.getElementById('checkInput');
function signIn() {
    // debugger
    for(var i = 0 ; i < users.length ; i++){
        if(signInEmail.value.toLowerCase() == users[i].email.toLowerCase() && signInPass.value == users[i].pass){
            var isFound = true 
            localStorage.setItem('userName',JSON.stringify(users[i].name));
            location.href = '/home.html'
        }
    }
    if (!isFound) {
        checkInValid.innerHTML = `<span class="text-danger my-3">incorrect email or password
        </span>`
    }
    if(signInEmail.value == '' || signInPass.value == ''){
        checkInValid.innerHTML = `<span class="text-danger my-3">All inputs is required</span>`
    }
}
/* ------------For Home-------------*/
var homeUser = document.getElementById('homeUser');
var nameInfo = localStorage.getItem('userName');
homeUser.innerHTML = `<h2 class="text-info">Welcome ${nameInfo}</h2>`