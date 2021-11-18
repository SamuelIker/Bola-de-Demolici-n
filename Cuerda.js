class Cuerda {
    constructor(bodyA, pointB) {
        var options =  {
       bodyA: bodyA,
       pointB: pointB,
       'stiffness': 1.2,
       'length': 250
        }

        this.pointB = pointB;
        this.cuerda = Constraint.create(options)
        World.add(world, this.cuerda);
    }

    attach(body) {
        this.cuerda.bodyA = body
    }
    fly() {
        this.cuerda.bodyA = null;
    }
    display() {
if (this.cuerda.bodyA) {
        var pointA = this.cuerda.bodyA.position
        var pointB = this.pointB
        push();
        stroke('blue');
        strokeWeight(3);
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();
    }

    }

    
}