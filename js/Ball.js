class Ball{
    constructor(){
        this.sx=0;
        this.sy=0;
        this.sw=0;
        this.sh=0;
        this.width=this.sw;
        this.height=this.sh;
        this.damage=0;
        this.speed=5;
        this.center={x:500, y:310};
        this.direction=30;
        this.radius=10;

    }

    draw(ctx){
        ctx.beginPath()
        ctx.arc(this.center.x,this.center.y,this.radius,0,2*Math.PI);
        ctx.fillStyle="#000"
        ctx.fill()
    }

    update(){
        this.center.x += this.speed * Math.cos(getRadian(this.direction));
        this.center.y += this.speed * Math.sin(getRadian(this.direction));
        // log(this.direction)
    }

}

