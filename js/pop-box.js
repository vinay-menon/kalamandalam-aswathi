    var $popTheatre = "<div class='pop-theatre'><div class='pop-close'><img src='images/ico_close.png'></div><div class='pop-vid-container'><div class='pop-asprat'><iframe frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div></div></div>";

    var ytURL = "https://www.youtube.com/watch?v=";
    var ytEmbedURL = "https://www.youtube.com/embed/";

$(".gallery-content-item").on("click", function(e) {
    e.preventDefault();

    $("body .pop-theatre").remove();

    $("body").append($popTheatre);

    $(".gallery-content-item").removeClass("pop-vid");
    $(this).addClass("pop-vid");

    var curYtURL = $(this).attr("href").replace(ytURL, '');

    $(".pop-theatre iframe").attr("src", ytEmbedURL + curYtURL);
});
$("body").on("click", ".pop-close", function(e) {
    e.preventDefault();

    $("body .pop-theatre").remove();
});