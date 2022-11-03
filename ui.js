var selectedFrame = 0;
var slide = document.getElementById("slide"),
sliderDiv = document.getElementById("sliderAmount"),
frameDiv = document.getElementById("frames"),
frameButton = document.getElementById("addframe");
var frameOutput = document.getElementById("frame-output");
var keyFrameButton = document.getElementById("addkeyframe");

function initValue() {
    for (let i=0; i<limbs.length; i++) {
        limbs[i].setRotation(90);
        console.log("asd");
    }
}

function setWidth(e, bodypart) {
    limbs[bodypart].w = parseInt(e.value);
}

function setHeight(e, bodypart) {
    limbs[bodypart].h = parseInt(e.value);

    if (bodypart == 6) {
        var value = -parseInt(e.value);
        limbs[0].mount_x = value;
        limbs[0].mount_y = value;
        limbs[5].mount_x = value;
        limbs[5].mount_y = value;
        limbs[7].mount_x = value;
        limbs[7].mount_y = value;
    }
}

function changeValue(e, bodypart) {
    e.nextElementSibling.innerHTML = e.value + "°";
    rotation = e.value;
    limbs[bodypart].setRotation(parseInt(e.value));

    frames[selectedFrame].value[bodypart] = parseInt(e.value);
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
    return html;
}

//document.addEventListener("DOMContentLoaded", function(event) {
//    slide.addEventListener("input", changeValue);
//});

function addFrame(isKeyframe) {
    frames.push(new Frame(isKeyframe));
    frameDiv.innerHTML = "";
    for (let i=0; i<frames.length; i++) {
        frameDiv.innerHTML += generateFrame(i);
    }
}

function addFirstFrameToEnd() {
    let frame = JSON.parse(JSON.stringify(frames[1]));
    frame.isKeyframe = true;
    frames.push(frame);
    frameDiv.innerHTML = "";
    for (let i=0; i<frames.length; i++) {
        frameDiv.innerHTML += generateFrame(i);
    }
}

function deleteFrame() {
    frames.splice(selectedFrame, 1);
    frameDiv.innerHTML = "";
    for (let i=0; i<frames.length; i++) {
        frameDiv.innerHTML += generateFrame(i);
    }
}

function goToFrame(frameNumber) {
    for (let i=0; i<limbs.length; i++) {
        let element = document.getElementById("slide" + i);
        element.value = frames[frameNumber].value[i];
    }
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

function saveAnimation() {
        let object = {"frames": frames};
        frameOutput.value = JSON.stringify(object);
}

function loadAnimation() {
    let object = JSON.parse(frameOutput.value);
    frames = object.frames;
    calculateFrameValues();
}

addFrame(true);
addFrame(false);
addFrame(false);
addFrame(false);
addFrame(false);
addFrame(false);
addFrame(true);