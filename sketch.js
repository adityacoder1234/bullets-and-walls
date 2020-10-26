var thickness,wall1;
var bullet,speed,weight;




function setup() {
  createCanvas(900,400);

  bullet = createSprite(130,140,20,20);
  bullet.velocityX=8;
 

  wall1 = createSprite(800,200,thickness,height/2);

  speed = random(223,321);
  thickness = random(22,83);
  weight = random(30,52);
}

function draw() {
  background(255,255,255);  
 
if(hascollided(bullet,wall1)) 
{
  bullet.velocityX = 0;
  var damage = 0.5 * speed*speed/(thickness*thickness*thickness);

  if(damage>10) 
  {
    wall1.shapeColor = color(250,0,0);
  }
  if(damage<10)
  {
    wall1.shapeColor=color(0,255,0);
  }
}
  
 
  drawSprites();
}

function hascollided(lbullet,lwall)
{
   bulletRightEdge = lbullet.x+lbullet.width;
   wallLeftEdge=lwall.x;

   if(bulletRightEdge>=wallLeftEdge)
   {
     return true;
   }
     return false;
}