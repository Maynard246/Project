function pasuser(form) {
    if (form.id.value=="JavaScript") { 
    if (form.pwd.value=="Kit") {              
    location="home.html" 
    } else {
    alert("Invalid Password")
    }
    } else {  alert("Invalid UserID")
    }
    }
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}