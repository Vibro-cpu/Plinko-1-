class Division{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,10,800,{isStatic: true});
        World.add(world, this.body);
    }

    
    display(){

        push ()

        fill("white")

        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,20,800)

        pop ()

    }
}