images = document.querySelectorAll("img");

// console.log(images);
// console.log(images.length);

for (var i = 0; i < images.length - 1; i++) {
    images[i].addEventListener("mouseover", show); 
    images[i].addEventListener("focus", show); 

    images[i].addEventListener("mouseleave", hide); 
    images[i].addEventListener("blur", hide);
}

/*Execute only when the listener detects the event */
function show(){
    // console.log("show");
    
	document.querySelector('#display').style.backgroundImage = "url('"+this.src+"')";
	document.querySelector('#display').innerHTML = this.alt;
}

function hide(){
    // console.log("hide");
    
	document.querySelector('#display').style.backgroundImage = "url('')";
	document.querySelector('#display').innerHTML = "Hover over an image below to display the image and the alt text.";
}