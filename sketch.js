let limbs = [];
let limbpng;
let frames = [];
let play = false;
let currentFrame = 0;
let selectedBodypart = 0;
let fps = 30;
let fpsCount = 0;

function setup() {
    limbpng = loadImage("/img/limb.png");
    headpng = loadImage("/img/head.png");
    upperarmpng = loadImage("/img/upperarm.png");
    lowerarmpng = loadImage("/img/lowerarm.png");
    upperlegpng = loadImage("/img/upperleg.png");
    lowerlegpng = loadImage("/img/lowerleg.png");
    bodypng = loadImage("/img/body.png");
    var canvas = createCanvas(512, 512);
    canvas.parent('canvas');
    buildBody();
}

function draw() {
    background(199);
    for (let i = 0; i < limbs.length; i++) {
      limbs[i].display();
    }
    let timeStep = 1.0 / 30;
  update();
}

function displayObjects() {
}

function update() {

  if (fpsCount >= 60/fps) {
    shouldStep = true;
    fpsCount = 0;
  } else {
    shouldStep = false;
    fpsCount ++;
  }

  if (play == true && shouldStep == true) {
    currentFrame = (currentFrame == frames.length - 1 ? 0 : currentFrame + 1);
    goToFrame(currentFrame);
  }
}

function calculateFrameValues() {
  var keyframeStartValue = 90;
  var count = 1;
  for (let l = 0; l<limbs.length; l++) {
    for (let i = 0; i<frames.length; i++) {
      if (frames[i].isKeyframe == true) {
        keyframeStartValue = frames[i].value[l];
        count = 1;
      } else {
        var obj = getDistanceToNextKeyFrame(i, l);
        var result = keyframeStartValue + Math.round((obj.value - keyframeStartValue) / obj.originalDistance * count);
        frames[i].value[l] = result;
        count ++;
      }
    }
  }
}

function getDistanceToNextKeyFrame(frame = 0, limb = 0) {
  var keyframeValue = 0;
  for (let i = frame; i<frames.length; i++) {
    if (frames[i].isKeyframe) {
      var distance = i - frame; //get distance from current frame
      var originalDistance = i - getPreviousKeyFrame(frame); //get distance from keyframe to keyframe
      keyframeValue = frames[i].value[limb];
    return {originalDistance: originalDistance, distance: distance, value: keyframeValue};
    }
  }
    return {distance: 0, value: 0};
  }

  function getPreviousKeyFrame(frame) {
    for (let i = frame; i>=0; i--) {
      if (frames[i].isKeyframe) {
        return i;
      }
    }
  }
