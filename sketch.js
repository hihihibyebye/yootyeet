var database,dog,happydog,food,dogimg,happydogimg;

function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png");
  happydogimg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database(); 
  dog = createSprite(400,350,50,50);
  dog = loadImage("img",dogimg);

  food = database.ref('Food');
  food.on("value",showError);
  

  
}


function draw() {  
background("green")
  drawSprites();
  //add styles here
  if(keyDown(UP_ARROW))
  {
    writefood(-1);

  }

}

function writefood()
  {
    database.ref('food').set
    {
        'count'
    }

  }



function showError()
{
    console.log("error");
}

