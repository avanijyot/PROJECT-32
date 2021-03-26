class basketBall {
    constructor(x, y, r) {
      var options = {
          isStatic : false,
          'restitution': 0.3,
          'friction': 0.5,
          'density': 1.2
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, this.r, options);
      this.image = loadImage("basketball.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("black");
      image(this.image, 0, 0, 80, 80);
      pop();
    }
  };