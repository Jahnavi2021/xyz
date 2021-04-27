var box1, box2;
var box3,box4;
function setup() {
  createCanvas(1200,800);
  box1 = createSprite(400, 100, 50, 80);
  box1.shapeColor = "green";
  box1.debug = true;
  box2 = createSprite(400, 800,80,30);
  box2.shapeColor = "green";
  box2.debug = true;

  box3 = createSprite(100,100,50,30);
  box3.shapeColor = "pink";
  box3.debug = true;

  box4 = createSprite(100,800,50,30);
  box4.shapeColor = "pink";
  box4.debug = true;



  box2.velocityY = -5;
  box1.velocityY = +5;
  box3.velocityY = +7;
  box4.velocityY = -7;
}

function draw() {
  background(0,0,0);  

  bounceOff(box1,box2);
  bounceOff(box3,box4);
  drawSprites();
}


