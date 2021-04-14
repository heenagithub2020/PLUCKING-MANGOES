class Launcher{
    constructor(body1,pointB){
        var options = {
            bodyA:body1,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.bodyA = body1;
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }

    attach(body){
        this.launcher.bodyA = body;
    }
    
    display(){
        if(this.launcher.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        //stroke("white");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}