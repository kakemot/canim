class Frame {
    constructor(keyframe) {
        this.isKeyframe = keyframe;
        this.html;
        this.value = [];
        this.value[0] = 0; //head
        this.value[1] = 90; //body
        this.value[2] = 90; //left upperleg
        this.value[3] = 90; //left lowerleg
        this.value[4] = 0; //left foot
        this.value[5] = 90; //right upperleg
        this.value[6] = 90; //right lowerleg
        this.value[7] = 0; //right foot
    }
}
