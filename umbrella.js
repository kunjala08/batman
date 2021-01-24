class umbrella{
 constructor(x,y){
  this.umbrella=Bodies.circle(x,y,10)
  this.x=x
  this.y=y
  this.image=loadImage('walking_1.png');
  World.add(world,this.umbrella)
 }

 display(){
    ellipseMode(RADIUS);
    image(this.image,0,0,5.5);


 }
}