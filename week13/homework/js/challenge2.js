sameAddress.addEventListener('change', function() {
	let home = document.querySelector("#home");
	let billing = document.querySelector("#bill");

	if (this.checked){
		home.value = billing.value;
		home.disabled = true;
	}
	else {
		home.value = "";
		home.disabled = false;
	}
});