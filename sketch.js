
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeObject,boy,ground,stoneObj;
var mangoObject1;
var stringObject;

function preload()
{
	
}

function setup() {
	createCanvas(1900, 950);


	engine = Engine.create();
	world = engine.world;

	treeObject= new Tree(1650,500,500,900);
	boy= new Boy(400,830,200,400);
	ground= new Ground(950,940,1900,20);
	stoneObj= new Stone(340,800,40,40);

	mangoObject1= new Mango(1650,300,50,50);
	mangoObject2= new Mango(1850,350,50,50);
	mangoObject3= new Mango(1750,250,50,50);
	mangoObject4= new Mango(1750,400,50,50);
	mangoObject5= new Mango(1600,200,50,50);
	mangoObject6= new Mango(1500,350,50,50);
	mangoObject7= new Mango(1600,400,50,50);

	stringObject = new Attach(stoneObj.body,{x:340, y:740});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
	textSize(25);
	  text("Press Space to get a second chance to play !!!",30,30)

  treeObject.display();
  boy.display();
  ground.display();
  stoneObj.display();

  mangoObject1.display();
  mangoObject2.display();
  mangoObject3.display();
  mangoObject4.display();
  mangoObject5.display();
  mangoObject6.display();
  mangoObject7.display();

  stringObject.display();

  detectollision(stoneObj,mangoObject1);
  detectollision(stoneObj,mangoObject2);
  detectollision(stoneObj,mangoObject3);
  detectollision(stoneObj,mangoObject4);
  detectollision(stoneObj,mangoObject5);
  detectollision(stoneObj,mangoObject6);
  detectollision(stoneObj,mangoObject7);

  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	stringObject.fly();
}

function detectollision(lstone,lmango){
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
	
	if(distance<-lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:340, y:740})
		stringObject.attach(stoneObj.body);                                                           
	}
}
