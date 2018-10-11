$(document).ready(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
        $(".navbar").css("background-color","#191c1f");


    } else {
        $(".navbar").css("background-color","transparent");
        }
})
})
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}