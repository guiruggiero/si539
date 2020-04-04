// Variables
var color = "#FF0000";
var radius = 15;
var x = 50;
var y = 150;

var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

var drawingFlag = true;

// Listeners
// Loading the window
canvas.width = 0.75 * window.innerWidth;
canvas.height = 0.75 * window.innerHeight;

// Mouse movement
canvas.addEventListener("mousemove", function(e) {
    // console.log("Mouse moved");
    // console.log(e);
    // console.log(e.x);
    // console.log(e.y);
    
    x = e.x - radius/2;
    y = e.y - radius/2;

    draw();
})

// Touch move
canvas.addEventListener("touchmove", function(e) {
    // console.log("Mouse moved");
    // console.log(e);
    
    x = e.touches[0].clientX - radius/4;
    y = e.touches[0].clientY - radius/4;

    draw();
})

// Keydown
document.addEventListener("keydown", function(e) {
    // console.log("Key pressed");
    // console.log(e);
    // console.log(e.keyCode);

    if(e.keyCode == "82"){ //red
        color = "#FF0000";
    }
    else if(e.keyCode == "71"){ //green
        color = "#00FF00";
    }
    else if(e.keyCode == "66"){ //blue
        color = "#0000FF";
    }
    else if(e.keyCode == "89"){ // yellow
        color = "#FFFF00";
    }
    else if(e.keyCode == "32"){ // space
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    else if(e.keyCode == "38"){ // up
        // console.log("Up arrow pressed");
        drawingFlag = false;
    }
    else if(e.keyCode == "40"){ // down
        // console.log("Down arrow pressed");
        drawingFlag = true;
    }

    draw();
})

// Color picker
clr.addEventListener("input", function(e) {
    // console.log("Color picker");
    // console.log(clr.value);

    color = clr.value
})

// Functions
// Draw
function draw(){
    // console.log("Ready to draw");
    if(drawingFlag == true){
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, radius, 0, 2*Math.PI);
        ctx.fill();
    }
}