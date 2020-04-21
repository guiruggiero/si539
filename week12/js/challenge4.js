challenge4_form.addEventListener("submit", function(e) {
    // console.log("submit");
    // e.preventDefault();

    var name = document.querySelector("#name");
    var address = document.querySelector("#addr");

    var name_error = document.querySelector("#nameError");
    var address_error = document.querySelector("#addrError");

    // console.log(name.value);
    // console.log(address.value);
    // console.log(name_error.textContent);
    // console.log(address_error.textContent);

    if (name.value == "") {
        name_error.style.display = "block";
    }
    else {
        name_error.style.display = "none";
    }

    if (address.value == "") {
        address_error.style.display = "block";
    }
    else {
        address_error.style.display = "none";
    }

    if (name.value == "" || address.value == "") {
        e.preventDefault();
    }

})