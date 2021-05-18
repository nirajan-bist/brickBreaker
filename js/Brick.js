class Brick{
    constructor(x=120,y=80,damage=1){
        this.type = null; //ice soid metal
        this.damage = damage;
        this.power = null;
        this.width = 70;
        this.height = 20;
        this.x = x ;
        this.y = y;
        this.color=['blue','red','green','black','orange','yellow']

    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle=this.color[this.damage-1]
        ctx.fillRect(this.left, this.top, this.width, this.height);

    }
    get left(){
        return this.x;
    }
    get top(){
        return this.y;
    }
    get right(){
        return this.x + this.width;
    }
    get bottom(){
        return this.y + this.height;
    }

    set left(val){
        this.x = val;
    }
}