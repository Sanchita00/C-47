var bird, ground;
var obstacle, obstacleGroup;
var PLAY =1;
var END =0;
var gameState = PLAY;

function preload(){

}

function setup() {

  createCanvas(500,600);

  bird=createSprite(50,250,50,50);
  
  ground=createSprite(250, 590, 500, 20);

  obstacleGroup = createGroup();

}

function draw() {
  background(0); 

  if(keyDown("space")){
    bird.y= bird.y-20;
  }
  
    bird.y=bird.y+10;
  

  bird.collide(ground);

  spawnObstacles();
  
  if(obstacleGroup.isTouching(bird)){
   gameState = END;
  }

  drawSprites();

}
function spawnObstacles(){
if (frameCount % 50 === 0)
{
  var obstacle=createSprite(500, 120, 60,50 )
  obstacle.y=Math.round(random(50,400));
  obstacle.velocityX= -4;
  obstacleGroup.add(obstacle);
}

}
