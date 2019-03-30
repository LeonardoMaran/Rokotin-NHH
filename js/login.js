/*=== GET DOM Elements ===*/
const loginForm = document.querySelector('#login-form');
const errorMessage = document.querySelector('.error-message');

loginForm.addEventListener('submit', e => {
  e.preventDefault();

  // get form fields
  const emailValue = loginForm['user-email'].value;
  const passwordValue = loginForm['user-password'].value
  passwordErrorAndCreateUser(emailValue, passwordValue);
});

// 
const passwordErrorAndCreateUser = (emailValue, passwordValue) => {
  const email = document.querySelector('#user-email');
  const password = document.querySelector('#user-password');
  if (passwordValue === '') {
    password.style.borderColor = 'red';
    password.setAttribute('placeholder', 'Invalid password');
    setTimeout(() => {
      password.setAttribute('placeholder', 'email@example.com');
      password.style.borderColor = '#909090';
    }, 2000);
  } else {
    auth.signInWithEmailAndPassword(emailValue, passwordValue).then((cred) => {
      console.log(cred);
    }).catch((err) => {
      errorMessage.innerHTML = err.message;
      setTimeout(() => {
        errorMessage.innerHTML = '';
      }, 3000);
    })
  }

  // reset form fields
  email.value = '';
  password.value = '';
}
