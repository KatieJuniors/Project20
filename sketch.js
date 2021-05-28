var tom, jerry;
function preload() {
    //load the images here
    tom1=loadAnimation("images/cat1.png");
    tom2=loadAnimation("images/cat2.png","images/cat3.png");
    tom3=loadAnimation("images/cat4.png");

    jerry1=loadAnimation("images/mouse1.png");
    jerry2=loadAnimation("images/mouse2.png");
    jerry3=loadAnimation("images/mouse3.png");
    jerry4=loadAnimation("images/mouse4.png");

    Garden=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(700,580);
    tom.addAnimation("sitting",tom1)
    tom.scale=0.22;

    jerry = createSprite(200,600);
    jerry.addAnimation("standing",jerry2);
    jerry.scale=0.13;
}

function draw() {

    background(Garden);
    //Write condition here to evalute if tom and jerry collide
    console.log(tom.width/2-jerry.width/2);
    if(tom.x-jerry.x<=tom.width/2-jerry.width/2) {

      tom.velocityX=0;
      tom.addAnimation("standing",tom3)
      tom.changeAnimation("standing",tom3);

      jerry.addAnimation("happy",jerry1);
      jerry.changeAnimation("happy",jerry1);

    }

  drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW) {

    tom.velocityX=-2;
    tom.addAnimation("running",tom2);
    tom.changeAnimation("running",tom2);
    jerry.addAnimation("teasing", jerry3);
    jerry.changeAnimation("teasing",jerry3);
    jerry.frameDelay = 25;

  }

  

}
