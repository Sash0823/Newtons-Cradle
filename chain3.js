class Chain3{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stifness: 0.04,
            length: 7,
        }
        this.chain3 = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.postition;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
    }
}