$(document).ready(function(){
    // console.log("ready");
    
    var standing = $('input[name="standing"]:checked').val();
    var year = $('input[name="gradDate"]:checked').val();

    // console.log(standing);
    // console.log(!year);

    $("#ch3form").submit(function(e){

        standing = $('input[name="standing"]:checked').val();
        year = $('input[name="gradDate"]:checked').val();

        // console.log(!standing);
        // console.log(year);
        // e.preventDefault();

        if(!standing && !year){
            alert("You must select a class standing and graduation date!");
            e.preventDefault();
        }
        else if(!standing){
            alert("You must select a class standing");
            e.preventDefault();
        }
        else if(!year){
            alert("You must select a graduation date!");
            e.preventDefault();
        };

    });

});