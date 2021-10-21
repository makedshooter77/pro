
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD8Q505l2p2UOpXHXs0HyfBq88i9ReUn4s",
      authDomain: "kwitter-fa5cf.firebaseapp.com",
      databaseURL: "https://kwitter-fa5cf-default-rtdb.firebaseio.com",
      projectId: "kwitter-fa5cf",
      storageBucket: "kwitter-fa5cf.appspot.com",
      messagingSenderId: "417309350891",
      appId: "1:417309350891:web:362f50bc93a56a571857ae"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("username");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function addroom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"Hi i am Ryan"
})
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Roomname-"+Room_names);
row="<div   class='room_name'id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+ "</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirect(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"

}function logout(){
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location="index.html"











}
