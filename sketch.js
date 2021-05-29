
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbinPart1, dustbinPart2, dustbinPart3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

paper = new Paper(100,600,20);
dustbinPart1 = new Dustbin(100,600,20,50);
dustbinPart2 = new Dustbin(200,600,50,20);
dustbinPart3 = new Dustbin(300,600,20,50);
ground = new Ground(400,height,1200,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
paper.display();
dustbinPart1.display();
dustbinPart2.display();
dustbinPart3.display();
ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}

