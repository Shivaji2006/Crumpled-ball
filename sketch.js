
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;
var dustbinImage;
var paperImage;

function preload(){

dustbinImage = loadImage("dustbingreen.png");
paperImage = loadImage("paper.png");

}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	dustbinObj.addImage(dustbinImage);

	paper = createSprite(800,400,20);
	paper.addImage(paperImage);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paper.x = mouseX;
  paper.y = mouseY;
 
  groundObject.display();
  dustbinObj.display();


}

