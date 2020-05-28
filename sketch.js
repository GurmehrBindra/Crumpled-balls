const Bodies= Matter.Bodies;
const Engine= Matter.Engine;
const World= Matter.World;

var dustbinrod1,dustbinrod2,dustbinrod3;
var paperball;

function setup(){
    createCanvas(600,400);
    engine= Engine.create();
    world=engine.world;

    dustbinrod1= new Dustbinrods(460,300,10,80);
    dustbinrod2= new Dustbinrods(540,300,10,80);
    dustbinrod3= new Dustbinrods(500,340,80,10);
    paperball= new Paperball(80,100,30);
}
function draw(){
    background(255,255,255);
    Engine.update(engine);
    drawSprites();
    dustbinrod1.display();
    dustbinrod2.display();
    dustbinrod3.display();
    paperball.display();
}

