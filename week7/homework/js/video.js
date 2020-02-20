var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid(){ 
	video.play();
	console.log("Play Video");
} 

function pauseVid(){ 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed(){ 
	video.playbackRate *= 0.5;
  	console.log("Speed is " + );
} 

function increaseSpeed(){
	video.playbackRate *= 2;
	console.log("Speed is " + );
} 

function skipAhead(){
	video.seek(15);
	console.log("Current location is " + (video.currentTime + 15);
} 

function mute(){ 
	if(video.muted){
		video.muted = false;
		console.log("Changed to unmuted");
	} else{
		video.muted = true;
		console.log("Changed to muted");
	}
}

function changeVolume(){

	console.log("Volume is " + );
}

function gray(){ 

	console.log("In grayscale")
}

function color(){

	console.log("In color") 
}