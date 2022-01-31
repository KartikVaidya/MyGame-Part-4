var Adam,Chrono,Jota,Kartik,Shafer

var Kelly,Ellina

var AWM,Deagle,Buster

var Player,Plyr2,plyr3,Plyr4

var levelUp,levelImg

var bulletR,bulletRImg,bulletL,bulletLImg

var bg,bgImg,wall,wallImg

var edgeT,edgeB,edgeL,edgeR

var shootBut,shootButImg

var life,lifeImg;
var playerLife=150;

var count=0;
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

levelImg =loadImage("levelUp.png")

bulletRImg =loadImage("bulletRight.png")
bulletLImg =loadImage("bulletLeft.png")

bgImg =loadImage("bg1.png")

wallImg =loadImage("wall.jpeg")

shootButImg =loadImage("shootbutton.png")

lifeImg=loadImage("life.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  bg =createSprite(width/2,height/2)
  bg.addImage("bgImg",bgImg)
  bg.scale =4;
   
 shootBut =createSprite()
shootBut.addImage("shoot",shootButImg)
shootBut.scale =0.3

edgeT =createSprite(width/2,-height*2.1,width*5,10)
edgeB =createSprite(width/2,height+1400,width*5,10)
edgeL =createSprite(-width*2,height/2,10,height*5)
edgeR =createSprite(width*3,height/2,10,height*5)

edgeT.visible =false
edgeB.visible =false
edgeL.visible =false
edgeR.visible =false

  Player =createSprite(400, 200, 50, 50);
Player.addImage("adam",Adam)
Player.addImage("Chrono",Chrono)
Player.addImage("Jota",Jota)
Player.addImage("Kartik",Kartik)

Player.scale =0.7

Plyr2 =createSprite(-1580, -1030, 50, 50);
Plyr2.addImage("adam",Adam)
Plyr2.scale =0.7

Plyr3 =createSprite(2608,-571.0999999999999, 50, 50);
Plyr3.addImage("adam",Adam)
Plyr3.scale =0.7

Plyr4 =createSprite(1570, 1100, 50, 50);
Plyr4.addImage("adam",Adam)
Plyr4.scale =0.7

levelUp =createSprite()
levelUp.addImage("levelImg",levelImg)
levelUp.visible =false;

life =createSprite(width/2 +300,height/2 -400)
life.addImage("lifeImg",lifeImg)
life.scale =0.1
}

function draw() {
  background(255,255,255);  
  drawSprites();
console.log("x ="+Player.x) 
console.log("y ="+Player.y) 
  if(keyDown(UP_ARROW)){
   Player.y =Player.y -10
  }
  if(keyDown(DOWN_ARROW)){
    Player.y =Player.y +10
   }
 
   if(keyDown(LEFT_ARROW)){
    Player.x =Player.x -10
   }
 
   if(keyDown(RIGHT_ARROW)){
    Player.x =Player.x +10
   }
 
if(mousePressedOver(shootBut)&& count===0){

  bulletR =createSprite(Player.x +80,Player.y+48);
  count++
  bulletL =createSprite();
  bulletR.visible =true
  bulletL.visible =false
  bulletR.addImage("bulletRImg",bulletRImg)
  bulletL.addImage("bulletLImg",bulletLImg)
  bulletR.scale =0.1
  bulletR.velocityX =40
bulletR.lifetime =60
}
if(mouseWentUp("leftButton")){
count=0;
}

camera.position.x =Player.x
camera.position.y =Player.y

shootBut.x =Player.x +500
shootBut.y =Player.y +200

Player.collide(edgeT)
Player.collide(edgeB)
  Player.collide(edgeL)
  Player.collide(edgeR)

  life.x =Player.x +500
  life.y =Player.y -200
fill("white");
rect(camera.position.x+200,camera.position.y-200,150,20);
fill("red");
rect(camera.position.x+200,camera.position.y-200,150,20);
 
}
