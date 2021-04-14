class Mango{
    constructor(x,y){
        var options ={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.circle(x,y,40,options);
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.image = loadImage("images/mango.png");
       
        
    }

    display(){
        var pos =this.body.position;
        
       ellipseMode(CENTER);
        image(this.image,pos.x,pos.y,40,40);
    }
}