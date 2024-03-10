
const signupFormHandler = async (event) => {
    event.preventDefault();

    console.log('in the singupFormHandler function');

    const userName = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const passwordConfirm = document.querySelector('#password2-signup').value.trim();
    

    if(password != passwordConfirm){
        alert("your passwords didn't match");
        return;
    }
    
    if (userName && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ userName, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      // console.log(`username: ${userName}, email: ${email}, password: ${password}`)
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Username or Email is already in use');
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

  