const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var ground;
var floor1;
var box,wood;
var block,square;
var topBox,polygon;
var slingshot,backgroundImage;
var gameState = "onSling";
var score = 0;

function preload(){
  getBackgroundImg();
}


function setup() {
   var canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
 
    ground = new Ground(900, 500, 400, 20);
    ground.shapeColor = color("yellow");

    box = new Box(900,445,66,66);
    box1 = new Box(830,445,66,66);
    box2 = new Box(765,445,66,66);
    box3 = new Box(950,445,66,66);
    box4 = new Box(1020,445,66,66);

    block = new Block(1000,385,66,66);
    block1 = new Block(930,385,66,66);
    block2 = new Block(860,385,66,66);
    block3 = new Block(790,385,66,66);

    square = new Square(900,320,66,66);
    square1 = new Square(830,320,66,66);
    square2 = new Square(970,320,66,66);

    wood = new Wood(860,255,66,66);
    wood1 = new Wood(930,255,66,66);
    topBox = new TopBox(890,185,66,66);

    polygon = new Polygon(200,250,80);
    floor1 = new Floor(600, 590, 1200, 15);
    floor2 = new Floor(1190, 300, 15, 600)
    floor3 = new Floor(600, 15, 1200, 15);
    floor4 = new Floor(10, 300, 15, 600);

   
  

    slingshot = new Slingshot(polygon.body,{x:200,y:300});
    Engine.run(engine);
    
  
}

function draw() {
  if(backgroundImage)
  background(backgroundImage);
  textSize(25);
  fill(0);
  text("SCORE : " + score ,20,580);
  Engine.update(engine);  
box.display();
box.score();
box1.display();
box1.score();
box2.display();
box2.score();
box3.display();
box3.score();
box4.display();
box4.score();

block.display();
block.score();

block1.display();
block1.score();

block2.display();
block2.score();

block3.display();
block3.score();

square.display();
square.score();
square1.display();
square1.score();
square2.display();
square2.score();

wood.display();
wood.score();
wood1.display();
wood1.score();
topBox.display();
topBox.score();
 ground.display();
 floor1.display();
 floor2.display();
 floor3.display();
 floor4.display();
 polygon.display();
 slingshot.display();

 
  
}

function mouseDragged(){
  if (gameState!=="launched"){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(polygon.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(responseJSON);
  console.log(hour);
  if(hour >= 06 && hour <= 19){
    bg = "bg2.jpg"
}
else{
    bg = "bg.png"
}

backgroundImage = loadImage(bg);

}