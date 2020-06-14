var car,wall;
var spd,wt;

function setup() {
  createCanvas(1600,400);
spd = random(55,90);
wt = random(400,1500);

car = createSprite(50,200,50,50);
car.shapeColor = "blue";
wall = createSprite(1600,200,60,height/2);
wall.shapeColor = "yellow";
wt = car.width/2 + wall.width/2;
spd = car.height/2 + wall.height/2;

}

function draw() {
  background(255,255,255);  
car.velocityX = spd;

if(wall.x - car.x < (car.width + wall.width)/2) {
  car.velocityX = 0;
  var deformation = 0.5*wt*spd*spd/22509;
  if(deformation > 180) {
    car.shapeColor = color(255,0,0);
  }
  if(deformation < 180 && deformation > 100) {
    car.shapeColor = color(230,230,0);
  }
  if(deformation < 100) {
    car.shapeColor = color(0,255,0);
  }
}

  drawSprites();
}