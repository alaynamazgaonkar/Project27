class chain{
    constructor(bodyA, pointB){
       // this.offsetX=offsetX
        //this.offsetY=offsetY
        this.pointB = pointB
        //this.pointA={x:this.offsetX,y:this.offsetY}
        var options = {
            bodyA: bodyA,
            //pointA:{x:this.offsetX,y:this.offsetY},
            //pointB:{x:this.offsetX,y:this.offsetY},
            pointB:pointB,
            stiffness: 0.04,
            length: 300
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        //var pointB = {x:this.offsetX,y:this.offsetY}
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }}
    
}