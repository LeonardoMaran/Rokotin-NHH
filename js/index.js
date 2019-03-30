// check user login status and redirect as appropriate
auth.onAuthStateChanged(user => {
  if (user) {
    // console.log('you are logged in');
    location.replace("./html/home.html")
  } else {
    // console.log('not logged in');
    setTimeout(() => {
      location.replace("./html/welcome.html")
    }, 3000)
  }
});