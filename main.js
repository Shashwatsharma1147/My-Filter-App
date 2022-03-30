NoseX = 0;
NoseY = 0;
Gender = "";
function take_gender(){
    Gender = document.getElementById("gender").value;
}

function preload(){
    Cloud_mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    Cloud_Lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);

    if(Gender != ""){
        if(Gender == "Male"){
            image(Cloud_mustache, NoseX-13, NoseY, 40, 30);
        }
        else{
            image(Cloud_Lipstick, NoseX-15, NoseY+15, 40, 30);
        }
    }
    

}

function take_snapshot(){
    save("myFilterImage.png");
}

function modelLoaded(){
    console.log("poseNet is Initialised");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("nose x ="+NoseX);
        console.log("nose y ="+NoseY);
    }
}

