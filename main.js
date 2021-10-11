mouthX=0;
mouthY=0;
function preload(){
mustach=loadImage("https://e7.pngegg.com/pngimages/101/800/png-clipart-handlebar-moustache-beard-moustache-fashion-monochrome-thumbnail.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
console.log("PoseNet is Initialized");
}

function draw(){
image(video,0,0,300,300);
image(mustach, mouthX, mouthY,40,40);
fill(0,0,255);
stroke(0,0,255);

}

function take_snapshot(){
    save("MyFilterIMG.png");
}

function gotPoses(results){
    if(results.length > 0){
console.log(results);
mouthX=results[0].pose.mouth.x;
mouthY=results[0].pose.mouth.y;
console.log("mouth x = " + results[0].pose.mouth.x);
console.log("mouth y = " + results[0].pose.mouth.y);
    }
}