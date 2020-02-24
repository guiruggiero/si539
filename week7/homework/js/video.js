// SI 539, Winter 2020 - homework 6
// Developed by Gui Ruggiero

// https://github.com/guiruggiero/homework6

var video;

function getVid(){
	video = document.querySelector("#myVideo");

	//Update the play and pause button to use images that you find or create on your own.
	//The image should not cover the words and it should NOT be a background-image.
	//You must work independently on this and cite resources.  If a resource is overly cited fewer points will be awarded.
	
	// document.querySelector("#play").innerHTML = "Testing"
}

function playVid(){ 
	video.play();
	console.log("Playing video");
} 

function pauseVid(){ 
	video.pause();
	console.log("Paused video");
} 

function decreaseSpeed(){ 
	video.playbackRate *= 0.8;
  	console.log("Speed is " + video.playbackRate);
} 

function increaseSpeed(){
	video.playbackRate *= 1.25;
	console.log("Speed is " + video.playbackRate);
}  

function mute(){ 
	if(video.muted){
		video.muted = false;
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML = "Mute"
	} else{
		video.muted = true;
		console.log("Muted");
		document.querySelector("#mute").innerHTML = "Unmute"
	}
}

function changeVolume(){
	newVolume = document.querySelector("#volumeSlider").value/100;
	newVolumeText = newVolume*100 + "%";
	video.volume = newVolume;
	console.log("Volume is " + newVolumeText);
	document.querySelector("#volume").innerHTML = newVolumeText;
}




function gray(){ //Utilize the existing grayscale class
	video.color = true;
	console.log("In grayscale");
}

function color(){ //Remove the grayscale class
	video.gray = false;
	console.log("In color");
}

function skipAhead(){
	video.seek(60); //Advance the current video by 60 seconds

	//If the video length has been exceeded - go back to the start of the video and reset the play speed to “normal.”
	if(video.muted){
		video.muted = false;
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML = "Mute"
	}

	console.log("Current location is " + video.currentTime);
}