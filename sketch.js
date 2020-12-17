var car,wall;
var speed,height;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50,200,50,50);
car.velocityX=3;

  wall= createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}