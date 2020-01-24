const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;



var  engine,world;
var tower1,tower2,ground,tower3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    tower1=new castle(100,100,20,100);
    tower2=new castle(300,100,20,100);
    tower3=new castle(200,100,20,100);
    ground=new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    tower1.display();
    tower2.display();
    tower3.display();
    ground.display();
}