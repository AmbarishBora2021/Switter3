var firebaseConfig = {
      apiKey: "AIzaSyBvPVBtpN2D0XtFLTz8YD8XzQMBpLkwkcU",
      authDomain: "kwitter-48007.firebaseapp.com",
      databaseURL: "https://kwitter-48007-default-rtdb.firebaseio.com",
      projectId: "kwitter-48007",
      storageBucket: "kwitter-48007.appspot.com",
      messagingSenderId: "99557054942",
      appId: "1:99557054942:web:965c1e13e662d1a2fde54f",
      measurementId: "G-YWWQ74LDT4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+ user_name +"!";

    function addRoom() 
    {
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
      purpose:"adding room_name"
     });
     localStorage.setItem("room_name", room_name);
     window.location ="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'># "+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function redirectToRoomName()
{
   console.log(name);
   localStorage.setItem("room_name", name); 
   window.location = "kwitter_page.html"; 
}

function logout()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location = "index.html";
}


