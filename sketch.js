
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drops,batman,batmanI;

function preload(){
    batmanI = loadImage("walking_5.png");
}

function setup(){
    engine = Engine.create();
	world = engine.world;

    batman = createSprite(250,450);
    batman.addImage(batmanI);
    batman.scale = 0.4

    World.add(world,batman);

    drops = new Drop;
}

function draw(){
    createCanvas(500,600);
    background("black");

    for(var i=0;i<200;i++){
        drops=(new Drop(random(0,400),10));
      
    }
    drawSprites();
    drops.display();
}   

