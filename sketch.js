//objects defined for matter.js library
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
//all the arrays initialization
var particle;
var plinkos = [];
var divisions=[];
var gamestate="start";

//height for divisions
var divisionHeight=300;

//variable for score
var score=0;
var turn=0;


//setup function
function setup() {

//canvas defined
  createCanvas(800, 800);

//engine created
  engine = Engine.create();

//world added
  world = engine.world;

//ground
  ground = new Ground(width/2,height,width,20);
  //line=new Ground(width/2,500,width,20);

//loop for divisions
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

//loops for plinkos
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }  

}
 

//draw function
function draw() {
  
//background colour
  background("black");

//text size
  textSize(20)
  text("Score : "+score,20,30);
  text("500",20,height-divisionHeight/2);
  text("500",100,height-divisionHeight/2);
  text("500",180,height-divisionHeight/2);
  text("500",260,height-divisionHeight/2);
  text("100",340,height-divisionHeight/2);
  text("100",410,height-divisionHeight/2);
  text("100",490,height-divisionHeight/2)
  text("200",580,height-divisionHeight/2);
  text("200",660,height-divisionHeight/2);
  text("200",740,height-divisionHeight/2);


//updating the engine
  Engine.update(engine);
 
//loop for displaying plinkos
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
    
//condition for particles according to framecount   
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>301 && particle.body.position.x<600){
        score=score+100
        particle=null;
      }
      if(particle.body.position.x>601 && particle.body.position.x<900){
        score=score+200
        particle=null;
      }
      if(particle.body.position.x<300){
        score=score+500;
        particle=null;
        if(turn>=5){
          gamestate="end"
        }
      }
    }
  }
  if(gamestate=="end"){
    textSize(50);
    text("Game Over",400,400)
  }

//displaying the divisions
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   //line.display();
}
function keyPressed(){
  if(keyCode==32){
    turn=turn+1;
    if(gamestate!=="end"){
      particle=new Particle(random(30,770),-50,10);
    }
    //particles.push(new Particle(random(30, 770), -50,10));
  }
}
