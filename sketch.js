var database,foodS,happyDog;
var dog,foodStock;

function preload(){
	dog=loadImage("images/dogimg.png")
}

function setup() {
	createCanvas(500, 500);
dog=createSprite(250,250,10,50);
}


function draw() {  

  drawSprites();
  dog.display();

}



