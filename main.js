objects=[];
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
    if(status!=""){
        objectDetector.detect(gotResult);
        nam=document.getElementById("input").value;
        for(i=0; i<objects.length; i++){
if(nam==objects[i].label){
            document.getElementById("Status").innerHTML="Status:" + "Objects Detected";
            document.getElementById("Num_obj").innerHTML="Number of objects:" + "" + objects.length;
         
            percent=floor(objects[i].confidence * 100);
            R=random(255);
            G=random(255);
            B=random(255);
            fill(R,G,B);
        text(objects[i].label + "" + percent + "%",objects[i].x +15,objects[i].y+15);
        noFill();
        stroke(R,G,B);
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}


function Start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:" + "Detecting Objects...";
}

function modelLoaded(){
    console.log("M0de! L0aDeD!");
    status=true;
}