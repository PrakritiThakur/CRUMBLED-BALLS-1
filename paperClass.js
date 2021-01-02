/*class paper{
 
    constructor(x,y,radius){
      var options={
   
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2

      }
    
      this.body=Bodies.circle(x,y,radius,options);
      this.radius=radius;

      World.add(world,this.body);

    }
    display(){
      
        ellipseMode(RADIUS);

        fill("white");

        circle(this.body.position.x,this.body.position.y,this.radius);
 

    }


    
}*/
class paperClass {
  constructor(x, y,radius) {
    var options = {
      isStatic: false,
      'restitution':0.3,
      'friction':0.5,
      'density':1.2
    }
    this.radius=radius;
    this.body =Bodies.circle(x, y,radius, options);
    
      
    World.add(world, this.body);
    
  }
  display(){
    rectMode(CENTER);

    fill("darkBlue");

    circle(this.body.position.x, this.body.position.y, this.radius);
  }
}