var thickness, wall;
var speed, weight,  bullet;


function setup() {
  createCanvas(1600,400);
 
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 80, 20);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
 
  bullet.debug = true;
  wall.debug = true;
 
}

function draw() {
  background(255,255,255);  
  bullet.collide(wall);
  bullet.velocityX = speed;
  console.log(speed);
  console.log(weight);
  
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(damage>=10){
      bullet.shapeColor = color(255,0,0);
    }
    else{
      bullet.shapeColor = color(0,255,0);
    }
    
  }

  drawSprites();
}