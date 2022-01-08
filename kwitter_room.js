
const firebaseConfig = {
      apiKey: "AIzaSyB_Wre5mOtrvqGnMy-ADPXoq5Ns8OYe9j4",
      authDomain: "kwitter-a0ecd.firebaseapp.com",
      databaseURL: "https://kwitter-a0ecd-default-rtdb.firebaseio.com",
      projectId: "kwitter-a0ecd",
      storageBucket: "kwitter-a0ecd.appspot.com",
      messagingSenderId: "237387346019",
      appId: "1:237387346019:web:c69c99042a0a6c9504c856",
      measurementId: "G-8VCW7FJ0LG"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
