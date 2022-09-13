var selectedFrame = 0;
var slide = document.getElementById("slide"),
sliderDiv = document.getElementById("sliderAmount"),
frameDiv = document.getElementById("frames"),
frameButton = document.getElementById("addframe");
var keyFrameButton = document.getElementById("addkeyframe");

function selectBodypart(e) {
    selectedBodypart = parseInt(e.value);
    slide.value = frames[selectedFrame].value[selectedBodypart];
    sliderDiv.innerHTML = slide.value;
}

function initValue() {
    for (let i=0; i<limbs.length; i++) {
        limbs[i].setRotation(90);
        console.log("asd");
    }
}

function changeValue() {
    sliderDiv.innerHTML = slide.value;
    console.log(slide.value);
    rotation = slide.value;
    limbs[selectedBodypart].setRotation(parseInt(slide.value));

    frames[selectedFrame].value[selectedBodypart] = parseInt(slide.value);
    calculateFrameValues();
    //[1].setRotation(slide.value/2);
}

function updateValue() {
    for (let i = 0; i < limbs.length; i++) {
        limbs[i].setRotation(frames[selectedFrame].value[i]);
    }
}

function generateFrame(frameNumber) {
    var isSelected = (selectedFrame == frameNumber ? 'selected' : 'unselected');
    var isKeyframe = (frames[frameNumber].isKeyframe === true ? 'keyframe' : '');
    var cssClass = 'class=" ' + isSelected + ' '+ isKeyframe +'"';
    var html = '<button ' + cssClass + ' onclick="goToFrame('+frameNumber+')" id="frame'+frameNumber+'">' + frameNumber + '</button>';
    frames[frameNumber].html = html;
    return html;
}

document.addEventListener("DOMContentLoaded", function(event) {
    slide.addEventListener("input", changeValue);
});

function addFrame(isKeyframe) {
    frames.push(new Frame(isKeyframe));
    frameDiv.innerHTML = "";
    for (let i=0; i<frames.length; i++) {
        frameDiv.innerHTML += generateFrame(i);
    }
}

function goToFrame(frameNumber) {
    slide.value = frames[frameNumber].value[selectedBodypart];
    selectedFrame = frameNumber;
    updateValue();

    frameDiv.innerHTML = "";
    for (let i=0; i<frames.length; i++) {
        frameDiv.innerHTML += generateFrame(i);
    }
}

function playAnimation() {
    play = true;
}

function stopAnimation() {
    play = false;
}

addFrame(true);
addFrame(false);
addFrame(false);
addFrame(false);
addFrame(false);
addFrame(false);
addFrame(true);