var database,dog,happydog,food,dogimg,happydogimg;

function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png");
  happydogimg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(400,350,50,50);
  dog = loadImage(dogimg);

  food = firebase.database().ref('food');
  food.on("value",readPosition,showError);
  

  
}


function draw() {  
background("green")
  drawSprites();
  //add styles here
  if(keyDown(UP_ARROW))
  {
    writeposition(-1);

  }

}



