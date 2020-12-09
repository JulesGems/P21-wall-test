var wall, thickness;
var bullet, bulletImage, speed, weight;
var gun, gunImage;
var damage;

function preload(){
  bulletImage = loadImage("bullet.png");
  gunImage = loadImage("Gun.png");
}
function setup() {
  createCanvas(1600,400);
  thickness=random(22, 83);
  speed=random(223, 321);
  weight=random(30, 52);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=80, 80, 80;
  bullet = createSprite(200, 200, 50, 10);
  bullet.shapeColor="white";
  bullet.addImage(bulletImage);
  bullet.scale=0.2;
  bullet.velocityX=speed;
  gun = createSprite(165, 290, 100, 100);
  gun.addImage(gunImage);
  gun.scale=0.3;
}

function draw() {
  background(0);
if(frameCount%50===30){
  thickness=random(22, 83);
  speed=random(223, 321);
  weight=random(30, 52);
  wall.width=thickness;
  wall.shapeColor=80, 80, 80;
  bullet.x=200;
  bullet.velocityX=speed;

  
}
if(bullet.isTouching(wall)){
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

}else(wall.shapeColor="gray")

if(damage>10){
  wall.shapeColor="red";
}
if(damage<=10){
  wall.shapeColor="green";
}
if(bullet.y>1200){
  wall.shapeColor="red"
}
  bullet.collide(wall);
  drawSprites();
}
