<!-- Connect firebase database -->
<
script src = "https://www.gstatic.com/firebasejs/5.9.2/firebase-app.js" > < /script> <
script src = "https://www.gstatic.com/firebasejs/5.9.2/firebase-auth.js" > < /script> <
script src = "https://www.gstatic.com/firebasejs/5.9.2/firebase-firestore.js" > < /script>

  <
  script >
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDKOcvxMWbDoIjyzCLslmscuux4FXZn2CQ",
    authDomain: "vaccify-rokotin-app.firebaseapp.com",
    databaseURL: "https://vaccify-rokotin-app.firebaseio.com",
    projectId: "vaccify-rokotin-app",
    storageBucket: "vaccify-rokotin-app.appspot.com",
    messagingSenderId: "179360692324"
  };
firebase.initializeApp(config);

// reference auth and firestore

const auth = firebase.auth();
const db = firebase.firestore(); <
/script>