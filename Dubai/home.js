$(document).ready(function() {
    $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
        $(".nav").css("max-height","70%");
          } else {
    $(".nav").css("max-height","0");
}
})
})