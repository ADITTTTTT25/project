class Division {

    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }
        this.w = width;
        this.h = height;

        this.body = Bodies.rectangle(x,y,this.w,this.h,options);
        World.add(world,this.body);
    }
    
    display(){
        var pos = this.body.position;
        fill("white");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h)
    }
}