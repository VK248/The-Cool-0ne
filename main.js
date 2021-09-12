eyeX=0;
eyeY=0;
function preload(){
clown_nose= loadImage('https://i.postimg.cc/ydQhnMGy/sunglasses.jpg');

}

function setup(){
canvas= createCanvas(350,350)
canvas.center();
video=createCapture(VIDEO);
video.size(350, 315);
video.hide();

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses); 
}
function modelLoaded(){
console.log('PoseNet Is Initialized');
}
function gotPoses(results){
if(results.length>0){
console.log(results);
eyeX=results[0].pose.eye.x;
eyeY=results[0].pose.eye.y;
console.log("eye x="+eyeX)
console.log("eye y="+eyeY)
}
}
function draw() {
    image(video,0,0,350,315);
    fill(255,0,0)
    stroke(255,0,0)
    circle(noseX,noseY,20)
    image(sunglasses,eyeX,eyeY,30,30);
    }




function take_snapshot(){
save('Filter-Selfie.png')
}
eyeX=0;
eyeY=0;

