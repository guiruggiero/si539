// SI 539, Winter 2020 - homework 6
// Developed by Gui Ruggiero

var video;

function getVid(){
	video = document.querySelector("#myVideo");
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
function skipAhead(){
	var newTime = video.currentTime + 60;
	if(newTime > 596){
		video.currentTime = 0;
		video.pause();
		video.playbackRate = 1;
		console.log("Location is 0s at normal speed (1)");
	}
	else{
		video.currentTime = video.currentTime + 60;
		console.log("Location is " + video.currentTime + "s");
	}
}

function gray(){
	video.classList.add("grayscale")
	console.log("Video in grayscale");
}

function color(){
	video.classList.remove("grayscale");
	console.log("Video in color");
}