$(document).ready(function() {
    $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
        $(".navbar").css("max-height","70%");
          } else {
    $(".navbar").css("max-height","0");
}
         })
         })