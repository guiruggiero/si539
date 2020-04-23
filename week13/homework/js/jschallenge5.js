$(document).ready(function(){
    // console.log("ready");
    
    var images = $("img");
    var display = $("#display");

    images.mouseover(show);
    images.focus(show);
    images.mouseleave(hide);
    images.blur(hide);

    function show(){
        display.css("background-image", "url('" + this.src + "')");
        display.html(this.alt);
    };

    function hide(){
        display.css("background-image", "url('')");
        display.html("Hover over an image below to display the image and the alt text");
    };

});