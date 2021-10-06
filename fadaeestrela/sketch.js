var starImg,bgImg;
var star, starBody;
var bell, fadaImg, tin;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fadaImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    tin = loadSound("sound/JoyMusic.mp3")
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    tin.play();
    //criar sprite de fada e adicionar animação para fada
    bell = createSprite(100,500);
    bell.addAnimation("fada",fadaImg);
    bell.scale = 0.2;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
    world = engine.world;

    starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
    World.add(world, starBody);

    Engine.run(engine);

 

}
function draw(){
background(bgImg)

if(keyDown ("LEFT_ARROW")){
    bell.velocityX = -2;
    bell.velocityY = 0;
}
if(keyDown  ("RIGHT_ARROW")){
    bell.velocityX = 2;
    bell.velocityY = 0;

}



if(star.y > 470 && starBody.position.y > 470){
    Matter.Body.setStatic(starBody,true);
}

drawSprites();
}