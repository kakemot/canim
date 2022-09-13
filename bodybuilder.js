function buildBody() {
    let head = new Limb(100, 120, 32, 32, 270, -70, -70);
    let body = new Limb(100, 120, 24, 80, 270, 0, 0);
    let upperleg_r = new Limb(100, 200, 16, 64, 270, 0, 0, "right");
    let lowerleg_r = new Limb(100, 264, 16, 50, 270, 0, 0, "right");
    let foot_r = new Limb(100, 350, 16, 32, 270, 0, 0, "right");
    
    let upperleg_l = new Limb(100, 200, 16, 64, 270, 0, 0, "left")
    let lowerleg_l = new Limb(100, 264, 16, 50, 270, 0, 0, "left");
    let foot_l = new Limb(100, 350, 16, 32, 270, 0, 0, "left");
    
    head.parent = body;
    head.hasParent = true;
    
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
    limbs.push(upperleg_l);
    limbs.push(lowerleg_l);
    limbs.push(foot_l);
    limbs.push(upperleg_r);
    limbs.push(lowerleg_r);
    limbs.push(foot_r);
    updateValue();
}
