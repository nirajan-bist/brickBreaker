class Brick{
    constructor(){
        this.type = null; //ice soid metal
        this.damage = null;
        this.power = null;
        this.width = 170;
        this.height = 150;
        this.left = 120
        this.right = this.left + this.width
        this.top = 80
        this.bottom = this.top + this.height

    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle="blue"
        ctx.fillRect(this.left, this.top, this.width, this.height);

    }
}