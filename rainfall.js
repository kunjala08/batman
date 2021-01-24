class rain {
    constructor(x,y){
      var options = {
          'friction':0.5,
      }
      this.body=Bodies.circle(x,y,10,options);
      this.x=x;
      this.y=y;
       this.radius=10;
      this.drops=[12];
      //console.log(this.drops.length)
     World.add(world,this.body)
   
    }

    display(){

        var pos = this.body.position;
        var drops=[];
        var maxDrop=100;
        
        push();
       
            for(var i=0; i<maxDrop ; i++){
            this.drops.push(new drops(random(0,400),random(0,400)));
            }
            translate(pos.x,pos.y);
            fill("blue");
            ellipseMode(RADIUS);
            ellipse(0,0,5.5);
            
        pop();

        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,700),y:random(0,400)})

        }
    }
}