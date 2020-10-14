class rope {
    constructor(bodyA,pointB){
        
        var options={
            bodyA:bodyA,
            length: 10,
            stiffness: 0.5,
            pointB:pointB
        }
        this.body= Constraint.create(options);
        World.add(world,this.body);
    }
    display()
    {
        var pointA=this.body.bodyA.position;
        var pointB=this.body.pointB;

        strokeWeight(3);

        line(pointA.x,pointA.y,pointB.x,pointB.y);
        
    }
}


