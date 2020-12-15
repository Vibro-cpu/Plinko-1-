const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var plinkos = []
var particle = []

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

//Bodies

  //ground

    ground = new Ground()

  //divisions & walls

    lwall = new Division(0,400)
    rwall = new Division(480,400)

    division1 = new Division(96,1000)
    division2 = new Division(192,1000)
    division3 = new Division(288,1000)
    division4 = new Division(384,1000)

  //plinkos

  for (var j = 40; j <= width; j=j+50) {
    plinkos.push(new Plinko(j,75))
  }

  for (var r = 60; r <= width - 50; r=r+50) {
    plinkos.push(new Plinko(r,175))
  }

  for (var j = 40; j <= width; j=j+50) {
    plinkos.push(new Plinko(j,275))
  }

  for (var r = 60; r <= width - 50; r=r+50) {
    plinkos.push(new Plinko(r,375))
  }

  for (var j = 40; j <= width; j=j+50) {
    plinkos.push(new Plinko(j,475))
  }

  for (var r = 60; r <= width - 50; r=r+50) {
    plinkos.push(new Plinko(r,575))
  }

}

function draw() {
  background(0,0,0);  

  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display()
  }

  if(frameCount%90 === 0){
    particle.push(new Particle(random(10,470),10))
  }

  for (var i = 0; i < particle.length; i++){
    particle[i].display()
  }

  Engine.update(engine);

  drawSprites();

  ground.display()

  lwall.display()
  rwall.display()

  division1.display()
  division2.display()
  division3.display()
  division4.display()

}