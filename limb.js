class Limb {
    constructor(x, y, w, h, rotation, ax, ay) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.rotation = rotation;
        this.selected = false;
        this.hasParent = false;
        this.parent;
        this.anchorpoint_x = ax;
        this.anchorpoint_y = ay;
    }

    display() {    
        // Draw it!
        push();
        if (this.hasParent) {
          var radtodeg = parent.rotation * (Math.PI/180);
          this.x = this.h * Math.cos(radtodeg) + this.parent.x;
          this.y = this.h * Math.sin(radtodeg) + this.parent.y;
        } 
        angleMode(DEGREES);
        circle(this.x, this.y, 30);
        translate(this.x, this.y);
        rotate(this.rotation);
        fill(127);
        stroke(200);
        strokeWeight(2);
        
        image(limbpng, this.anchorpoint_x, this.anchorpoint_y, this.w, this.h);
        
        pop();
      }

      setRotation(rotation) {
        this.rotation = rotation;
      }
}