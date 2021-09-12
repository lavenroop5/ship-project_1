var ship , sea 

function preload(){

  ship_moving = loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png" , "ship-4.png");
  
  sea_1 = loadImage("sea.png");

}

function setup(){

  createCanvas(1250,550);

  sea = createSprite(200,200,500,500);
  sea.addImage("seaa",sea_1);
  
  
  

  ship = createSprite(200,200,300,300);
  ship.addAnimation("moving",ship_moving);
  ship.scale= 0.5;
  
}

function draw() {

  background("blue");
 
  

  sea.velocityX = - 10;
  
  if (sea.x<0){
    sea.x = sea.width/2;
  }

 
  drawSprites();
 
}