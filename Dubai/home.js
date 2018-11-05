$(document).ready(function() {
    $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
        $(".nav").css("max-height","70%");
          } else {
    $(".nav").css("max-height","0");
}
})
})
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1200){
            $(".footer").css({"opacity" : "1"})
        }
 else {
        $(".footer").css({"opacity" : "0"})
    }
 })
 })