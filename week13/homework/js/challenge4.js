challenge4_form.addEventListener('submit', function(e) {
    var name = document.querySelector("#name")
    var address = document.querySelector("#addr")
  
    if (name.value.length == 0){
        document.querySelector("#nameError").style.display = "block"; 
        e.preventDefault()
    }
    else {
        document.querySelector("#nameError").style.display = "none";
    }

    if (address.value.length == 0){
        document.querySelector("#addrError").style.display = "block"; 
        e.preventDefault()
    }
    else {
        document.querySelector("#addrError").style.display = "none"; 
    }
});