class bob {
    constructor(x,y,diameter){
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.bob = Matter.Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
        World.add(world,this.bob);
    }
    display(){
        var pos =this.bob.position;
        fill("purple");
        stroke("white");
        ellipse(pos.x,pos.y,this.diameter,this.diameter);
    }
}