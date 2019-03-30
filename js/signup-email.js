/*=== GET DOM Elements ===*/
const signupForm = document.querySelector('#signup-email-form');
const errorMessage = document.querySelector('.error-message')

signupForm.addEventListener('submit', e => {
  e.preventDefault();

  // get form fields
  const name = signupForm['user-name'].value;
  const email = signupForm['user-email'].value;
  const password1Value = signupForm['user-password1'].value
  const password2Value = signupForm['user-password2'].value;
  passwordErrorAndCreateUser(email, password1Value, password2Value);
});

// 
const passwordErrorAndCreateUser = (emailValue, password1Value, password2Value) => {
  const name = document.querySelector('#user-name');
  const email = document.querySelector('#user-email');
  const password1 = document.querySelector('#user-password1');
  const password2 = document.querySelector('#user-password2');
  if (password1Value !== password2Value) {
    password1.style.borderColor = 'red';
    password2.style.borderColor = 'red';
    password1.setAttribute('placeholder', 'password do not match');
    password2.setAttribute('placeholder', 'password do not match')
    setTimeout(() => {
      password1.setAttribute('placeholder', '********');
      password2.setAttribute('placeholder', '********');
      password1.style.borderColor = '#909090';
      password2.style.borderColor = '#909090';
    }, 2000);
  } else {
    auth.createUserWithEmailAndPassword(emailValue, password2Value).then((cred) => {
      console.log(cred);
    }).catch((err) => {
      errorMessage.innerHTML = err.message;
      setTimeout(() => {
        errorMessage.innerHTML = '';
      }, 3000);
    })
  }

  // reset form fields
  name.value = '';
  email.value = '';
  password1.value = '';
  password2.value = '';
}
