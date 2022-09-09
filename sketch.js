let limbs = [];
let limbpng;
let frames = [];
let play = false;
let currentFrame = 0;
let selectedBodypart = 0;
function setup() {
    limbpng = loadImage("/img/limb.png");
    var canvas = createCanvas(512, 512);
    canvas.parent('canvas');
    let upperleg = new Limb(100, 200, 16, 64, 270, 0, 0)
    let lowerleg = new Limb(100, 264, 16, 64, 0, 0, 0);
    let foot = new Limb(100, 350, 16, 32, 0, 0, 0);

    lowerleg.parent = upperleg;
    lowerleg.hasParent = true;
    foot.hasParent = true;
    foot.parent = lowerleg;
    limbs.push(upperleg);
    limbs.push(lowerleg);
    limbs.push(foot);
    //limbs.push(foot);
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
  if (play == true) {
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
        console.log(obj);
        var result = keyframeStartValue + Math.round((obj.value - keyframeStartValue) / obj.originalDistance * count);
        frames[i].value[l] = result;
        console.log("Frame " + i + " limb" + l + " result " + result);
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
