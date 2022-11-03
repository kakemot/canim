function buildBody() {
    let head = new Limb(100, 120, 18, 18, 270, 0, 0);
    let body = new Limb(100, 120, 12, 34, 270, 0, 0);

    let upperarm_r = new Limb(100, 200, 10, 22, 270, 0, 0, "right");
    let lowerarm_r = new Limb(100, 200, 10, 26, 270, 22, 0, "right");

    let upperarm_l = new Limb(100, 200, 10, 22, 270, 0, 0, "left");
    let lowerarm_l = new Limb(100, 200, 10, 26, 270, 22, 0, "left");

    let upperleg_r = new Limb(100, 200, 12, 24, 270, 32, 0, "right");
    let lowerleg_r = new Limb(100, 264, 12, 24, 270, 24, 0, "right");
    let foot_r = new Limb(100, 350, 8, 14, 270, 24, 0, "right");
    
    let upperleg_l = new Limb(100, 200, 12, 24, 270, 32, 0, "left")
    let lowerleg_l = new Limb(100, 264, 12, 24, 270, 24, 0, "left");
    let foot_l = new Limb(100, 350, 8, 14, 270, 24, 0, "left");
    
    body.sprite = bodypng;

    head.parent = body;
    head.sprite = headpng;
    head.hasParent = true;
    head.pivot_y = -head.h;
    
    upperarm_r.parent = body;
    upperarm_r.hasParent = true;
    upperarm_r.sprite = upperarmpng;
    lowerarm_r.parent = upperarm_r;
    lowerarm_r.hasParent = true;
    lowerarm_r.sprite = lowerarmpng;

    upperarm_l.parent = body;
    upperarm_l.hasParent = true;
    upperarm_l.sprite = upperarmpng;
    lowerarm_l.parent = upperarm_l;
    lowerarm_l.hasParent = true;
    lowerarm_l.sprite = lowerarmpng;

    upperleg_r.parent = body;
    upperleg_r.hasParent = true;
    upperleg_r.sprite = upperlegpng;
    
    upperleg_l.parent = body;
    upperleg_l.hasParent = true;
    upperleg_l.sprite = upperlegpng;
    
    lowerleg_r.parent = upperleg_r;
    lowerleg_r.hasParent = true;
    lowerleg_r.sprite = lowerlegpng;

    foot_r.hasParent = true;
    foot_r.parent = lowerleg_r;
    foot_r.sprite = upperarmpng;
    
    lowerleg_l.parent = upperleg_l;
    lowerleg_l.hasParent = true;
    lowerleg_l.sprite = lowerlegpng;
    foot_l.hasParent = true;
    foot_l.parent = lowerleg_l;
    foot_l.sprite = upperarmpng;

    limbs.push(upperarm_l);
    limbs.push(lowerarm_l);
    limbs.push(upperleg_l);
    limbs.push(lowerleg_l);
    limbs.push(foot_l);
    limbs.push(head);
    limbs.push(body);
    limbs.push(upperarm_r);
    limbs.push(upperleg_r);
    limbs.push(lowerarm_r);
    limbs.push(lowerleg_r);
    limbs.push(foot_r);
    updateValue();
}
