function setup(){
    canvas=createCanvas(300,300);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bPOl5M101/model.json',modelLoaded);
    canvas.center();
}

function draw()
{
    image(video,0,0,300,300);
    classifier.classify(video, gotResult);
    
}
function modelLoaded()
{
    console.log('Model LOADED IF U SEE THIS I BET UR A BaD DEV BECAUSE u wana STEAL MY CODE!!!')
}
function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}