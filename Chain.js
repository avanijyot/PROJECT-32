class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA !== null){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        }
    }

    fly(){
        this.chain.bodyA = null;
    }
    
    attach(body){
        this.chain.bodyA = body;
    }

}