var bin_img
var bin
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bin_img = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	bin_img.addImage("bin", bin_img)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter.Bodies.circle(50, 650, 5, [isStatic, restitution, friction, density]); 
	Matter.Body.applyForce(this.paper, paper.position.x, paper.position.y, push);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



