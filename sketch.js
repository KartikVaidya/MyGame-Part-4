var Adam,Chrono,Jota,Kartik,Shafer

var Kelly,Ellina

var AWM,Deagle,Buster

var Player

var edges

function preload(){
Adam =loadImage("Adam.png")
Chrono =loadImage("Chrono.png")
Jota=loadImage("Jota.png")
Kartik =loadImage("Kartik.png")
Shafer =loadImage("Shafer.png")

Kelly =loadImage("Kelly.png")
Ellina =loadImage("Ellina.png")

AWM =loadImage("Sks.png")
Deagle =loadImage("Deagle.png")
Buster =loadImage("Buster.png")

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  Player =createSprite(400, 200, 50, 50);
Player.addImage("adam",Adam)
Player.addImage("Chrono",Chrono)
Player.addImage("Jota",Jota)
Player.addImage("Kartik",Kartik)

edges=createEdgeSprites()
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(keyDown(UP_ARROW)){
   Player.y =Player.y -4
  }
  if(keyDown(DOWN_ARROW)){
    Player.y =Player.y +4
   }
 
   if(keyDown(LEFT_ARROW)){
    Player.x =Player.x -4
   }
 
   if(keyDown(RIGHT_ARROW)){
    Player.x =Player.x +4
   }
 Player.collide(edges);

}