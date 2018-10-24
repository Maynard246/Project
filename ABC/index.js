$(document).ready(function() {
    $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
        $(".navbar").css("max-height","70%");
          } else {
    $(".navbar").css("max-height","0");
}
         })
         })
         $(document).ready(function() {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                $("header").css("background-color","rgb(250, 247, 244)");
        
        
            } else {
                $("header").css("background-color","transparent");
                }
        })
        })
        // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}