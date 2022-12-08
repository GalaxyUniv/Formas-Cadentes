var chao;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var block1_options ={
		restitution:0.5,
		fricton:0.02,
		frictionAir:0
	}
	var block2_options ={
		restitution:0.5,
		fricton:0.02,
		frictionAir:0
	}
	var block3_options ={
		restitution:0.5,
		fricton:0.02,
		frictionAir:0
	}

	block1 = Bodies.circle(200,50,50,block1_options);
	World.add(world,block1);
	
	block2 = Bodies.rectangle(110,50,50,50,block2_options);
	World.add(world,block2);
	
	block3 = Bodies.rectangle(350,50,50,100,block3_options);
	World.add(world,block3);

	chao = Bodies.rectangle(400,690,800,20,{isStatic:true});
	World.add(world,chao);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  Engine.update(engine);

  
  ellipseMode(RADIUS)
  ellipse(block1.position.x,block1.position.y,50)

  rect(block2.position.x,block2.position.y,50,100)
  rect(block3.position.x,block3.position.y,50,50)
}



