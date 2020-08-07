
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  
  for (var k=0; k<=800;k = k+80){
    divisions.push(new Division(k,640,10,divisionHeight));
  }
  
  for( var j=40; j <= 800; j=j+50){
  
    plinkos.push(new Plinko(j,75));
  
  }
  
  for(var j =15; j <= 800 - 10;j=j+50){
  
    plinkos.push(new Plinko(j,175));
  }
  
  for (var j = 40; j <= 800; j=j+50){
  
    plinkos.push(new Plinko(j,275));
  }
  
  for (var j =15; j <= 800 - 10;j=j+50){
  
    plinkos.push(new Plinko(j,375));
  }
  
  
  ground = new Ground(240,790,480,20);
}

function draw() {
  Engine.update(engine);
  background(0); 
  
  
  for( var j=0;j<particles.length;j++){
    particles[j].display();

  }

  for ( var k = 0; k < divisions.length;k++){
    divisions[k].display();
  }

  for ( var j =0; j < plinkos.length;j++){
    plinkos[j].display();
  }
  if(frameCount % 60 === 0){
  
    particles.push(new Particle(random(800/2+10), 10,10));
  }
  
  ground.display();
 
}