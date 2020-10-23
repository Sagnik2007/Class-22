const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var ground,ball;

function setup() {
  createCanvas(800,400);
engine = Engine.create()
world = engine.world

var options = {
  isStatic : true
}
ground = Bodies.rectangle(400,390,800,10,options);
World.add(world,ground);

ball = Bodies.circle(400,200,20,{restitution : 0.8});
World.add(world,ball);

}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,40,40);

  drawSprites();
}