class Slingshot {
    constructor(bodyA,bodyB){
        var Options ={ 
bodyA:bodyA,
bodyB:bodyB,
length:100,

stiffness :0.1
        }
this.Slingshot=Constraint.create(Options)
World.add(world,this.Slingshot)
    }
display(){
  var pointA=this.Slingshot.bodyA.position
  var pointB=this.Slingshot.bodyB.position
  strokeWeight(1)
  line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}