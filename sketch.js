//Create variables here
var dog, happyDog,dogImg,happyDogImg;
var  database;
var foods, foodStock;

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  happyDogImg=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(1000, 500);
  dog=createSprite(250,300,0.5,0.5);
  dog.scale=0.3;
  dog.addImage(dogImg);

  database = firebase.database();

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {
  background(46,139,87);
  textSize(20);
  fill("white");
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(happyDogImg);
  }
text("food remaining : "+ foods,150,170);
  drawSprites();
  //add styles here
 
text("NOTE:Press UP_ARROW key to feed the dog",20,20);

}
function readStock(data){
  foods=data.val();
}
function writeStock(x){

  if(x<0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({ 
    food:x
  })
}


