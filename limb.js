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
        this.anchorpoint_x = 0;
        this.anchorpoint_y = 0;

        this.mount_x = ax;
        this.mount_y = ay;
        this.id = "";
    }

    display() {    
        // Draw it!
        push();
        var radtodeg = this.rotation * (Math.PI/180);
        this.anchorpoint_x = this.h * Math.cos(radtodeg) + this.x + this.mount_x;
        this.anchorpoint_y = this.h * Math.sin(radtodeg) + this.y + this.mount_y;

        if (this.hasParent) {
          this.x = this.parent.anchorpoint_x;
          this.y = this.parent.anchorpoint_y;
        }

        angleMode(DEGREES);
        translate(this.x, this.y);
        circle(0, 0, 30);
        rotate(this.rotation + this.rotation_offset);
        fill(127);
        stroke(200);
        strokeWeight(2);
        image(limbpng, 0, 0, this.w, this.h);
        
        pop();
      }

      setRotation(rotation) {
        this.rotation = rotation;
      }
}
