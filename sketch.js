var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1
	packageSprite.velocityX = 2;

	helicopterSprite=createSprite(0, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.3
	helicopterSprite.velocityX = 2;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(40,10 , 15 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //helicopterSprite.visible = false;
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y; 

// packageSprite.position.x =  helicopterSprite.x 
// packageSprite.position.y =   helicopterSprite.y

if(helicopterSprite.x === width/2){
   Matter.Body.setStatic(packageBody,false) ;
}

   drawSprites();
 
}





