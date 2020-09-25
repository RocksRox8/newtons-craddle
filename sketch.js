
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject;
 var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject=new roof(width/2,175,220,28)

	bobDiameter=40
	
	startBobPositionX=width/2
	startBobPositionY=675
	
	bobObject1=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
    bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject2=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);

	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter,0)
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter,0)
	rope3=new rope(bobObject3.body,roofObject.body,-bobDiameter,0,0)
	rope4=new rope(bobObject4.body,roofObject.body,-bobDiameter,0)
	rope5=new rope(bobObject5.body,roofObject.body,-bobDiameter,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();

roofObject.display();

ropeObject1.display();
ropeObject2.display();
ropeObject3.display();
ropeObject4.display();
ropeObject5.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.body.applyForce(bobObject1.body,bobObject1.body.position,{x:50,y:-45});
	}
}



