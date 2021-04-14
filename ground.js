class Ground{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,800,20,{isStatic:true});
        this.x = x;
        this.y = y;
        World.add(world,this.body);
        
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
       rect(pos.x,pos.y,800,20);
    }
}