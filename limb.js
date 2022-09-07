class Limb {
    constructor(x, y, w, h, rotation_offset, ax, ay) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.rotation = 0;
        this.rotation_offset = rotation_offset;
        this.selected = false;
        this.hasParent = false;
        this.parent;
        this.anchorpoint_x = ax;
        this.anchorpoint_y = ay;
    }

    display() {    
        // Draw it!
        push();
        var radtodeg = this.rotation * (Math.PI/180);
        this.anchorpoint_x = this.h * Math.cos(radtodeg) + this.x;
        this.anchorpoint_y = this.h * Math.sin(radtodeg) + this.y;

        if (this.hasParent) {
          var radtodeg = parent.rotation * (Math.PI/180);
          this.x = this.parent.anchorpoint_x;
          this.y = this.parent.anchorpoint_y;
        }

        angleMode(DEGREES);
        translate(this.x, this.y);
        rotate(this.rotation + this.rotation_offset);
        fill(127);
        stroke(200);
        strokeWeight(2);
        
        image(limbpng, 0, 0, this.w, this.h);
        circle(0, 0, 30);
        circle(this.anchorpoint_x, this.anchorpoint_y, 30);
        pop();
      }

      setRotation(rotation) {
        this.rotation = rotation;
      }
}
