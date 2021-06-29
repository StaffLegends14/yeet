const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball,ball2;
var ground;
var con,con2;

function preload(){
  img = loadImage("images.png");
}

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }
  
  
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(200,150,10,ball_options);
  World.add(world,ball2);
  
  con = Matter.Constraint.create({
          pointA:{x:200,y:20},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
  
      World.add(world,con);
      
      con2 = Matter.Constraint.create({
        bodyA:ball,
        bodyB:ball2,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.1
      });

    World.add(world,con2);
  
  rectMode(CENTER);
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  image(img,ball.position.x,ball.position.y,50);
  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  
  pop();
  image(img,ball2.position.x,ball2.position.y,50);
  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
  
  pop();
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}

