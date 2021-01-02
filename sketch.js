
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var Cpaper,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Cpaper=new paperClass(150,570,40);
	ground = new Ground(400,600,800,20);
	box1=new dustbin(500,580,130,20);
	box2=new dustbin(440,540,20,100);
	box3=new dustbin(570,540,20,100);

	World.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  Cpaper.display();

  keyPressed();

  drawSprites();
 
}
function keyPressed() {
	 if(keyCode === UP_ARROW)  {
		Matter.Body.applyForce(Cpaper.body, Cpaper.body.position, 
			{x:15, y:-20})
	 }
   }


