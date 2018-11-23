$(document).ready(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
        $("header").css("background-color","rgb(0, 153, 255)");


    } else {
        $("header").css("background-color","transparent");
        }
})
})