class Ball{
    constructor(){
        this.sx=0;
        this.sy=0;
        this.sw=0;
        this.sh=0;
        this.width=this.sw;
        this.height=this.sh;
        this.damage=0;
        this.speed=2;
        this.center={x:50, y:10};
        this.direction=30;
        this.radius=10;

    }

    draw(ctx){
        ctx.beginPath()
        // ctx.arc(this.center.x,this.center.y,this.radius,0,2*Math.PI);
        ctx.fillStyle="#000"
        ctx.fillRect(this.left, this.top, this.radius*2, this.radius*2);
        ctx.fill()
    }

    update(){
        this.center.x += this.speed * Math.cos(getRadian(this.direction));
        this.center.y += this.speed * Math.sin(getRadian(this.direction));
    }

    get top(){
        return this.center.y - this.radius;
    }

    get bottom(){
        return this.center.y + this.radius;
    }
    
    get left(){
        return this.center.x - this.radius;
    }
    
    get right(){
        return this.center.x + this.radius;
    }

    set left(val){
        this.center.x = val+this.radius;
    }

    set right(val){
        this.center.x = val-this.radius;
    }
    
    set top(val){
        this.center.y = val+this.radius;
    }

    set bottom(val){
        this.center.y = val-this.radius;
    }
    
}

