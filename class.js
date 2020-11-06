class Paper{
    constructor(x, y, radius) {
        var options = {
            restitution:0.4,
            friction:2.0,
            density:1.0,
           
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        
        World.add(world, this.body);
      }
      display(){
        var angle=this.body.angle
       var pos =this.body.position;
       push();
        translate(pos.x,pos.y);
        rotate(angle);
        circle(CENTER);
        circle(0,0,this.radius);
       pop();
      }
}