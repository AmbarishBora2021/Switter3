//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBvPVBtpN2D0XtFLTz8YD8XzQMBpLkwkcU",
    authDomain: "kwitter-48007.firebaseapp.com",
    databaseURL: "https://kwitter-48007-default-rtdb.firebaseio.com",
    projectId: "kwitter-48007",
    storageBucket: "kwitter-48007.appspot.com",
    messagingSenderId: "99557054942",
    appId: "1:99557054942:web:261298e54d7a7d0ffde54f",
    measurementId: "G-57W8TNDM4K"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function Send()
{
msg = document.getElementById("msg").value; 
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";


}