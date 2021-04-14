
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 var mango1,mango2,mango3,mango4;
 var launcher1;	

function preload()
{
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new Tree(300,120);
	ground = new Ground(400,690);
	mango1 = new Mango(480,225);
	mango2 = new Mango(417,349);
	mango3 = new Mango(611,337);
	mango4 = new Mango(430,416);
	mango5 = new Mango(708,332);
	mango6 = new Mango(658,273);
	mango7 = new Mango(567,200);

	stone = new stone(52,500);

	launcher1 = new Launcher(stone.body,{x:53,y:520})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
 
  image(boy,10,420,250,350);

  tree.display();
  ground.display();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stone.display();
  launcher1.display();


  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  

  drawSprites();
  text(mouseX + "," + mouseY,mouseX,mouseY);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
 launcher1.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:53,y:520}) 
	  launcher1.attach(stone.body);
	}
}

function detectollision(stone1,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=stone1.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+stone1.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }