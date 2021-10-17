prediction1="";
prediction2="";

Webcam.set({
height:300,
width:350,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
 document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log(ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qGhZ-_R6K/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

function speak(){
 var synth=window.speechSynthesis;
 speakdata1="The first prediction is "+prediction1;
 speakdata2="The second prediction is "+prediction2;
 var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
 synth.speak(utterthis);
}