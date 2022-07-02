Webcam.set({
    height:300,
    width:350,
    img_format:'jpeg',
    jpeg_quality:100
});
camera = document.getElementById("camera");
Webcam.attach("#camera")
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img src='"+data_uri+"' id='captured_img'/>"
    });
}
function check(){
    console.log("ml5 version", ml5.version)
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iKjxGN7RV/model.json", modelLoaded)
    function modelLoaded(){
        console.log("model Loaded");
    }
}
