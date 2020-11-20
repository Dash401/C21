var thickness, wall;
var speed,weight;
var bullet,damage;

function setup() {
  createCanvas(1600,400);
 speed     = random(223,321);
 weight    = random(30,52);
 thickness = random(22,83);
bullet   = createSprite(500,200,50,50);
 wall   = createSprite(1200,200,thickness,200);
 wall.shapeColor = "blue";

bullet.velocityX = speed;
bullet.shapeColor = "red";
}

function draw() {
  background(50);  
  if(wall.x - bullet.x < (bullet.width+wall.width/2) ){
    bullet.velocityX = 0;
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage < 100){
      wall.shapeColor = "green";
    }
    if(damage >= 100){
      wall.shapeColor = "red";
    }    
  }
  drawSprites();
}