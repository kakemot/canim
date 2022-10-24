function buildBody() {
    let head = new Limb(100, 120, 32, 32, 270, 0, 0);
    let body = new Limb(100, 120, 24, 48, 270, 0, 0);

    let upperarm_r = new Limb(100, 200, 16, 32, 270, 0, 0, "right");
    let lowerarm_r = new Limb(100, 200, 16, 32, 270, 32, 0, "right");

    let upperarm_l = new Limb(100, 200, 16, 32, 270, 0, 0, "left");
    let lowerarm_l = new Limb(100, 200, 16, 32, 270, 32, 0, "left");

    let upperleg_r = new Limb(100, 200, 16, 32, 270, 48, 0, "right");
    let lowerleg_r = new Limb(100, 264, 16, 32, 270, 32, 0, "right");
    let foot_r = new Limb(100, 350, 12, 24, 270, 32, 0, "right");
    
    let upperleg_l = new Limb(100, 200, 16, 32, 270, 48, 0, "left")
    let lowerleg_l = new Limb(100, 264, 16, 32, 270, 32, 0, "left");
    let foot_l = new Limb(100, 350, 12, 24, 270, 32, 0, "left");
    
    body.sprite = bodypng;

    head.parent = body;
    head.sprite = headpng;
    head.hasParent = true;
    head.pivot_y = -head.h;
    
    upperarm_r.parent = body;
    upperarm_r.hasParent = true;
    upperarm_r.sprite = legpng;
    lowerarm_r.parent = upperarm_r;
    lowerarm_r.hasParent = true;
    lowerarm_r.sprite = legpng;

    upperarm_l.parent = body;
    upperarm_l.hasParent = true;
    upperarm_l.sprite = legpng;
    lowerarm_l.parent = upperarm_l;
    lowerarm_l.hasParent = true;
    lowerarm_l.sprite = legpng;

    upperleg_r.parent = body;
    upperleg_r.hasParent = true;
    upperleg_r.sprite = legpng;
    
    upperleg_l.parent = body;
    upperleg_l.hasParent = true;
    upperleg_l.sprite = legpng;
    
    lowerleg_r.parent = upperleg_r;
    lowerleg_r.hasParent = true;
    lowerleg_r.sprite = legpng;

    foot_r.hasParent = true;
    foot_r.parent = lowerleg_r;
    foot_r.sprite = legpng;
    
    lowerleg_l.parent = upperleg_l;
    lowerleg_l.hasParent = true;
    lowerleg_l.sprite = legpng;
    foot_l.hasParent = true;
    foot_l.parent = lowerleg_l;
    foot_l.sprite = legpng;

    limbs.push(upperarm_l);
    limbs.push(lowerarm_l);
    limbs.push(upperleg_l);
    limbs.push(lowerleg_l);
    limbs.push(foot_l);
    limbs.push(head);
    limbs.push(body);
    limbs.push(upperarm_r);
    limbs.push(lowerarm_r);
    limbs.push(upperleg_r);
    limbs.push(lowerleg_r);
    limbs.push(foot_r);
    updateValue();
}
