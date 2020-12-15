class Ground{
    constructor(){
        this.body = Bodies.rectangle(240,800,480,20,{isStatic: true});
        World.add(world, this.body);
    }

    display(){

        push ()

        fill("white")

        rectMode(CENTER)
        rect(240,800,480,20)

        pop ()
    }
}