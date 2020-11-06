

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1600,700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	cb= new Paper(200,450,35);
	//Engine.run(engine);
	g = new Ground(800,670,1600,20);
	d1=new Dustbin(1000,650,200,10);
	d2=new Dustbin(1100,555,10,200);
	d3=new Dustbin(900,555,10,200);
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("pink");
  cb.display();
  g.display();
  d1.display();
  d2.display();
  d3.display();
 

 
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(cb.body,cb.body.position,{x:230,y:-160});
	}
	
}


