var dogImage,dog,happyDogImg,Happydog ,database, foodS, foodStock;

function preload()
{
  dogImage=loadImage("images/dogImg1.png");
  happyDogImg=loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog=createSprite(250,270,20,20);
  dog.addImage(dogImage);
  dog.scale=0.2;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(rgb(46, 139, 87));
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS-1);
    dog.addImage(happyDogImg);
  }
  drawSprites();
  fill("white");
  stroke("white");
  textSize(20);
  text("Note:Press UP_ARROW Key To Feed The Dog",50,50);
text("Food Remaining="+foodS,130,150);
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
  x=0;
  }
  database.ref('/').update({
    Food:x
  })
}


