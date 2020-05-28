class Paperball{
    constructor(x,y,radius,){
        var options={
            'isStatic':true
        }
    this.body=Bodies.circle(x,y,radius,options)
    this.radius=radius;
    

    World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    if(pos.x<485){
        pos.x=pos.x+3;
    }
   
    if(pos.x==479){
        pos.y=pos.y+200;
    }
    push();
    translate(pos.x,pos.y);
    ellipseMode(CENTER);
    ellipse(0,0,this.radius,this.radius);
    pop();
    }
}