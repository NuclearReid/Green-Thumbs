

var loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('CLICKED');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log(email, password);
 });