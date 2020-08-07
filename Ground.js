class Ground{

    constructor(x,y,width,height){
        this.w = width;
        this.h = height;
        var options ={
            isStatic:true,
        }
        this.body = Bodies.rectangle(x,y,this.w,this.h,options);
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        fill("white");
        push();
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}