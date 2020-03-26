subscribe.addEventListener('change', function() {
  console.log(this)
	var x = document.querySelector("#emailDiv");
	if (this.checked){
		  console.log("selected");
    	x.style.display = "block";
  	} else {
  		console.log("Not selected");
    	x.style.display = "none";
  	}
  })

  // 	Advanced Option....
  // 	x.style.display == "block" ? 
	//     x.style.display = "none" : 
	//     x.style.display = "block"; 
