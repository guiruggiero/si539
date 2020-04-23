$(document).ready(function(){
    // console.log("ready");
    
    var box = $("#sameAddress");
    var home = $("#home");
    var billing = $("#bill");
    
    // console.log(box.prop("checked"));

    box.change(function(){

        if(box.prop("checked") == true){
            home.val(billing.val());
            home.attr("disabled", true);
            home.css("background-color", "#D1D1D1");
        }
        else{
            home.val("");
            home.removeAttr("disabled");
            home.css("background-color", "#FFFFFF");
        };

    });

});