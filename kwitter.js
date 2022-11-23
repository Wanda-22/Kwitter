function adduser() {
    o=document.getElementById("in").value;
    localStorage.setItem("username",o);
    window.location="kwitter_room.html";
}