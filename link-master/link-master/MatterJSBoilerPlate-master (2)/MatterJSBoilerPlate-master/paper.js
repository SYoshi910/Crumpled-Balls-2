class Paper {
    constructor(x, y, radius) {
      var options = {
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x, y, radius-30, options);
      this.radius = radius;
      this.image = loadImage("sprites/paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      imageMode(RADIUS);
      fill("orange");
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      image(this.image,0,0, this.radius,this.radius);
      pop();
      
    }
  };