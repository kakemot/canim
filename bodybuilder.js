function buildBody() {
    let head = new Limb(100, 120, 32, 32, 270, -70, -70);
    let body = new Limb(100, 120, 24, 80, 270, 0, 0);

    let upperarm_r = new Limb(100, 200, 16, 50, 270, -65, -65, "right");
    let lowerarm_r = new Limb(100, 200, 16, 50, 270, 0, 0, "right");

    let upperarm_l = new Limb(100, 200, 16, 50, 270, -65, -65, "left");
    let lowerarm_l = new Limb(100, 200, 16, 50, 270, 0, 0, "left");

    let upperleg_r = new Limb(100, 200, 16, 64, 270, 0, 0, "right");
    let lowerleg_r = new Limb(100, 264, 16, 50, 270, 0, 0, "right");
    let foot_r = new Limb(100, 350, 16, 32, 270, 0, 0, "right");
    
    let upperleg_l = new Limb(100, 200, 16, 64, 270, 0, 0, "left")
    let lowerleg_l = new Limb(100, 264, 16, 50, 270, 0, 0, "left");
    let foot_l = new Limb(100, 350, 16, 32, 270, 0, 0, "left");
    
    head.parent = body;
    head.hasParent = true;
    
    upperarm_r.parent = body;
    upperarm_r.hasParent = true;
    lowerarm_r.parent = upperarm_r;
    lowerarm_r.hasParent = true;

    upperarm_l.parent = body;
    upperarm_l.hasParent = true;
    lowerarm_l.parent = upperarm_l;
    lowerarm_l.hasParent = true;

    upperleg_r.parent = body;
    upperleg_r.hasParent = true;
    
    upperleg_l.parent = body;
    upperleg_l.hasParent = true;
    
    lowerleg_r.parent = upperleg_r;
    lowerleg_r.hasParent = true;
    foot_r.hasParent = true;
    foot_r.parent = lowerleg_r;
    
    lowerleg_l.parent = upperleg_l;
    lowerleg_l.hasParent = true;
    foot_l.hasParent = true;
    foot_l.parent = lowerleg_l;
    limbs.push(head);
    limbs.push(body);
    limbs.push(upperarm_l);
    limbs.push(lowerarm_l);
    limbs.push(upperarm_r);
    limbs.push(lowerarm_r);
    limbs.push(upperleg_l);
    limbs.push(lowerleg_l);
    limbs.push(foot_l);
    limbs.push(upperleg_r);
    limbs.push(lowerleg_r);
    limbs.push(foot_r);
    updateValue();
}
