var $blah = true;

$(".nav-trigger").on("click", function(e) {
    e.preventDefault();
    
    $(".main-header nav").toggleClass("menu-open");

    if ($blah === true) {
        $blah = false;
        $(".nav-trigger img").attr("src", "images/ico_close.png");
        } else if ($blah === false)  {
            $blah = true;
            $(".nav-trigger img").attr("src", "images/ico_menu.png");
            }
});