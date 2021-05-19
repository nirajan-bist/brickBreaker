class Ball{
    constructor(){
        this.sx=0;
        this.sy=0;
        this.sw=0;
        this.sh=0;
        this.width=this.sw;
        this.height=this.sh;
        this.damage=0;
        this.speed=11;
        this.center={x:356, y:400};
        // this.center={x:725, y:250};
        this.direction={x:Math.cos(getRadian(-120)), y:Math.sin(getRadian(30))};
        this.radius=10;
        

    }

    makeUnitDirection(){
        let x = this.direction.x
        let y = this.direction.y
        let dist = Math.sqrt(x*x + y*y)
        this.direction.x = x/dist;
        this.direction.y = y/dist;
    }

    draw(ctx){
        ctx.beginPath()
        ctx.arc(this.center.x,this.center.y,this.radius,0,2*Math.PI);
        ctx.fillStyle='#000'
        // ctx.fillRect(this.left, this.top, this.radius*2, this.radius*2);
        ctx.fill()
    }

    update(){
        
        this.center.x += this.speed * this.direction.x;
        this.center.y += this.speed * this.direction.y;
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

