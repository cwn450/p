
prediction  = "";

Webcam.set({
    width : 350,
    height : 300,
    img_format : "png",
    png_quality : 90
});
   
camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='selfie_img' src="+data_uri+">"
    });
}
console.log("ml5 Version : " , ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cDZ-oyV4Y/model.json" , modelLoaded);

function modelLoaded(){
    console.log("The Model Was Successfully Loaded!");
}

function speak(){
    var synth = window.speechSynthesis;
    speakdata1 = "First Prediction is " + prediction1;
    speakdata2 = " And the Second Prediction is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
    synth.speak(utterThis);
}