
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,ball2,ball3;
var box;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new ball(100,100);
	ball2 = new ball(200,100);
	ball3 = new ball(300,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ball1.display();
  ball2.diplay();
  ball3.display();
  chain1.display();
  chain2.display();
  chain3.display();
  box.display();
}



