ch3form.addEventListener("submit", function(e) {
    // console.log("submit");

    // var standing = document.querySelectorAll("standing");
    // var standing = document.querySelectorAll(input[name="standing"]);
    var standing = document.getElementsByName("standing");
    var graduation = document.getElementsByName("gradDate");

    var standing_selected = false;
    var graduation_selected = false;

    // console.log(standing);
    // console.log(standing.length);
    // console.log(standing[0].checked);
    // console.log(standing[5].checked);

    for (var i = 0; i < standing.length - 1; i++) {
        if (standing[i].checked) {
            standing_selected = true;
        }
    }

    // console.log(graduation);
    // console.log(graduation.length);

    for (var i = 0; i < graduation.length - 1; i++) {
        if (graduation[i].checked) {
            graduation_selected = true;
        }
    }

    // console.log(standing_selected);
    // console.log(graduation_selected);

    if (standing_selected == false && graduation_selected == false) {
        alert("You must select a class standing and a graduation date!");
        e.preventDefault();
    }
    else if (standing_selected == false){
        alert("You must select a class standing!");
        e.preventDefault();
    }
    else if (graduation_selected == false){
        alert("You must select a graduation date!");
        e.preventDefault();
    }

})