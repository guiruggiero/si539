sameAddress.addEventListener("change", function() {
    // console.log("here");

    var billing = document.querySelector("#bill");
    var home = document.querySelector("#home");

    // console.log(this.checked);
    // console.log(billing.value);

    if (this.checked){
        home.value = billing.value;
        // home.setAttribute("disabled", "disabled");
        home.disabled = true;
    }
    else{
        home.value = "";
        // home.removeAttribute("disabled");
        home.disabled = false;
    }
})