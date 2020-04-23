$(document).ready(function(){
    // console.log("ready");
    
    var name = $("#name");
    var address = $("#addr");

    var nameError = $("#nameError");
    var addressError = $("#addrError");

    // console.log(name);
    // console.log(address);

    $("#challenge4_form").submit(function(e){

        if(name.val() == ""){
            nameError.css("display", "block");
            e.preventDefault();
        }
        else{
            nameError.css("display", "none");
        };

        if(address.val() == ""){
            addressError.css("display", "block");
            e.preventDefault();
        }
        else{
            addressError.css("display", "none");
        };

    });

});