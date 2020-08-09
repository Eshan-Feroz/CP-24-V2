const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var engine, world;
var bin1, bin2, bin3;
var ground;
var ball;

function setup(){
	createCanvas(1600,700);
	rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1600,20)

	bin1 = new Dustbin(1070, 680, 250, 20);
    bin2 = new Dustbin(950, 650, 20, 125);
	bin3 = new Dustbin(1200, 650, 20, 125);
	
	ball = new Paper(200, 450, 40);

	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	  Engine.run(engine);
}

function draw(){
	rectMode(CENTER);
    background(0);
    //Engine.update(engine);

    bin1.display();
	bin2.display();
	bin3.display();
	ground.display();
	ball.display();
	
	console.log(ball.body.position);
	

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, {x:85 ,y:-85});
		
	}
}


