var selectedFrame = 0;
var slide = document.getElementById("slide"),
sliderDiv = document.getElementById("sliderAmount"),
frameDiv = document.getElementById("frames"),
frameButton = document.getElementById("addframe");
var keyFrameButton = document.getElementById("addkeyframe");

function selectBodypart(e) {
    selectedBodypart = parseInt(e.value);
}

function changeValue() {
    sliderDiv.innerHTML = slide.value;
    console.log(slide.value);
    rotation = slide.value;
    console.log(selectedBodypart);
    limbs[selectedBodypart].setRotation(parseInt(slide.value));

    frames[selectedFrame].value = parseInt(slide.value);
    calculateFrameValues();
    //[1].setRotation(slide.value/2);
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
    slide.value = frames[frameNumber].value;
    selectedFrame = frameNumber;
    changeValue();

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