class Tree{
    constructor(x,y){
        this.tree = Bodies.rectangle(x,y,500,600,{isStatic:true});
        this.x = x;
        this.y = y;
        World.add(world,this.tree);
        this.image = loadImage("images/tree.png");

    }

    display(){
        var pos =this.tree.position;
        rectMode(CENTER);
        image(this.image,pos.x,pos.y,500,600);
    }
}