var database,dog,happydog,food,dogimg,happydogimg,foodstoock;

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
  dog.addImage(dogimg);
  dog.scale=0.3;

  foodstoock = database.ref('food');
  foodstoock.on("value",readfood,showError);
}


function draw() {  
background("green")
  drawSprites();
  //add styles here
  if(keyDown(UP_ARROW))
  {
    writefood(food);
    dog.addImage(happydogimg);
  }
stroke("violet");
textSize(19);
text("foodRemaining:"+food,250,500);
}

function readfood(data)
{
  food=data.val();
}

function writefood(x)
  {
   if(x<=0)
   {
    x=0;
   }
   else
   {
    x=x-1;
   }
   database.ref('/').update({
     food:x
   })
   

   
  }



function showError()
{
    console.log("error");
}

