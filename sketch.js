//to create the sprites objects
var dustbinObj;
var groundObject;
var ball;	
var engine, world;
var boy;
var backgroundImg;
var score = 0;
var turns = 0;

//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

//to preload the images
function preload(){

	backgroundImg = loadImage("bg1.png");

	boy = loadImage("boy.png");

}

function setup() {

	//to create the canvas
	createCanvas(1600, 700);

	//rectMode
	rectMode(CENTER);

	//to create the engine and world
	engine = Engine.create();
	world = engine.world;

	//to create the game objects
	groundObject = new ground(width/2, 690, width, 20);

	hoop = new Hoop(1200, 670);

	ball = new basketBall(0, 0, 35);

	chain = new Chain(ball.body, {x : 245, y : 460});

	//to run the engine
	Engine.run(engine);
  
}

function draw() {

  //to give the background
  background(backgroundImg);

  //to update the engine
  Engine.update(engine);

  //rectMode	
  rectMode(CENTER);

  //to display the game objects 
  groundObject.display();

  image(boy, 200, 375, 250, 400);
  
  hoop.display();

  ball.display();

  chain.display();

  //to draw the sprites
  drawSprites();

  //to display the text
  textSize(30);
  strokeWeight("4");
  stroke("black");
  fill("brown");
  text("Score : " + score, 20, 50);
  text("Turns Left : " + turns, 20, 90);
  text("Drag the ball, aiming it towards the goal to score a point.", 20, 130);
  text("Press the 'SPACE KEY' to reset the ball's position.", 20, 170);

}

function mouseDragged(){

	Matter.Body.setPosition(ball.body, {x : mouseX, y : mouseY});

}

function mouseRealeased(){

	chain.fly();

}

function keyPressed(){

	if(keyCode === 32){

		this.chain.attach(ball.body);
		Matter.Body.setPosition(ball.body, {x : 245, y : 460});

	}

}