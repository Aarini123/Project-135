video="";
function preload(){
}

function setup(){
    canvas=createCanvas(480,350);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,580,600);
}

function Start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:" + "Detecting Objects...";
}

function modelLoaded(){
    console.log("M0de! L0aDeD!");
    status=true;
}