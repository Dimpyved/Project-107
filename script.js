function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JcWczh6tI/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);

}