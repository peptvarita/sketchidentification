function setup(){
can= createCanvas(280,280)
can.center()
myModel = ml5.imageClassifier("DoodleNet")
synth = window.speechSynthesis
can.mouseReleased(classifycanvas)
}

function draw(){
    strokeWeight(13)
    stroke(240, 119, 119)
if(mouseIsPressed){
    line(
        pmouseX,pmouseY,mouseX,mouseY)
}
}

function Clear(){
    background("black")
}

function classifycanvas(){
    myModel.classify(can,gotResult)
}

function gotResult(error,results){
if(error){
    console.log(error)
}
else{
    console.log(results)
document.getElementById("name").innerHTML= "You have drawn a " +results[0].label
document.getElementById("acc").innerHTML= "Accuracy "+Math.round(results[0].confidence*100)+" % "
bolo = new SpeechSynthesisUtterance(results[0].label)
synth.speak(bolo)
}
}



















