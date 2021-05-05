class Paper{
    constructor(x,y,r){
        var obj={
            isStatic:false,
            density:1.2,
            friction:0,
            restitution:0.3,
        }
        this.image=loadImage("paper.png")
        this.body= Bodies.circle(x,y,r-18);
        this.r= r
        World.add(world,this.body);
    }
    display(){
     image(this.image, this.body.position.x, this.body.position.y, this.r, this.r)
    }
}