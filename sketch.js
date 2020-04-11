var fixedRect, movingRect;
var ob1,ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1 = createSprite(100,100,50,40);
  ob1.shapeColor = "green";

  ob2 = createSprite(300,100,50,40);
  ob2.shapeColor = "green";
  ob1.velocityX = 4;
  ob2.velocityX = -5;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  bounceOff(ob1,ob2);
  drawSprites();
}

