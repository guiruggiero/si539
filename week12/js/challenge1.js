subscribe.addEventListener("change", function() {
    // console.log("here");

    var email = document.querySelector("#emailDiv");

    // console.log(email);
    console.log(this.checked);

    if (this.checked){
        email.style.display = "block";
        email.style.color = "purple";
    }
    else{
        email.style.display = "none";
    }
})