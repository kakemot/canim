class Limb {
    constructor(x, y, w, h, rotation_offset, ax, ay, side = "none") {
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
        this.side = side;
        this.mount_x = ax;
        this.mount_y = ay;
        this.id = "";
        this.sprite = limbpng;
        this.xoffset = 0;
        this.yoffset = 0;
    }

    display() {    
        // Draw it!
        push();
        var radtodeg = this.rotation * (Math.PI/180);
        this.anchorpoint_x = this.h * Math.cos(radtodeg) + this.x;
        this.anchorpoint_y = this.h * Math.sin(radtodeg) + this.y;

        if (this.hasParent) {
          var radtodeg = this.parent.rotation * (Math.PI/180);
          this.x = (this.parent.h + this.mount_x) * Math.cos(radtodeg) + this.parent.x;
          this.y = (this.parent.h + this.mount_y) * Math.sin(radtodeg) + this.parent.y;
        }


        angleMode(DEGREES);
        translate(this.x, this.y);
        //circle(0, 0, 30);
        rotate(this.rotation + this.rotation_offset);
        if (this.side == "left") {
          tint(0, 153, 204);
        }
        image(this.sprite, this.xoffset, this.yoffset, this.w, this.h);
        
        pop();
      }

      setRotation(rotation) {
        this.rotation = rotation;
      }
}
