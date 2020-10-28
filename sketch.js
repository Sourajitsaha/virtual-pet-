var dogImage,dog,happyDogImg,Happydog ,database, foodS, foodStock;

function preload()
{
  dogImage=loadImage("images/dogImg1.png");
  happyDogImg=loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog=createSprite(250,250,20,20);
  dog.addImage(dogImage);
  dog.scale=0.2;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(rgb(46, 139, 87));
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS-data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


