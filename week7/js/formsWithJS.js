function check1() {
	console.log("In check ");
	let val1 = document.querySelector("#email_addr");
	let val2 = document.querySelector('#email_addr_repeat');
 	if (val1.value != val2.value) {
 	 	alert("The emails don't match!!");
 	 	val1.focus();
 	 	return false;
  	}
}


function check2(input) {
	console.log(input)
	console.log("In check with " + input.value);
	let val1 = document.querySelector('#email_addr');
	console.log(val1.value);
 	if (input.value != val1.value) {
 	 	alert("The emails don't match!!");
 	 	this.focus();
  	}
}