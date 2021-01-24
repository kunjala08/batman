var kk=[20,20,20]

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball1,boy

function preload(){
    
}

function setup(){
   createCanvas(700,700)
   engine = Engine.create();
   world = engine.world;
   ball1= new rain(20,20)
   boy= new umbrella(202,200)

}

function draw(){
   background(0)
   Engine.update(engine); 
   ball1.display();
   boy.display();
}   

