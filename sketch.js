
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    ceiling = new Roof(350,250,360,50);

	bob1 = new Bob(220,450,60)
	bob2 = new Bob(285,450,60)
	bob3 = new Bob(350,450,60)
	bob4 = new Bob(415,450,60)
	bob5 = new Bob(480,450,60)

	rope1 = new Rope(bob1.body,ceiling.body,-120,0);
	rope2 = new Rope(bob2.body,ceiling.body,-60,0);
	rope3 = new Rope(bob3.body,ceiling.body,0,0);
	rope4 = new Rope(bob4.body,ceiling.body,60,0);
	rope5 = new Rope(bob5.body,ceiling.body,120,0);
	
	Engine.run(engine);
  
}


function draw(){ 
  rectMode(CENTER);
  background("white");
  ceiling.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
  
	}

	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:45});
	}
}