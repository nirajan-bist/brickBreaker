class Launcher{
    constructor(bottom=0,damage=1){
        this.powers = [];
        this.length = 'normal'
        this.width = 180;
        this.height = 20;
        this.x = (canvas.width-this.width)/2 ;
        this.y = canvas.height-this.height -20 ;
        this.color=['maroon','red','green','black','orange','yellow']
        this.life = 10
        this.tempX=this.x;
        this.up = true;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle=this.color[0]
        ctx.fillRect(this.x, this.y, this.width, this.height);

    }

    holdPosition(e){
        var rct=canvas.getBoundingClientRect();
        this.tempX = e.clientX - rct.left- this.width/2;
        if (this.tempX < 0) this.tempX = 0;
        if (this.tempX > canvas.width - this.width) this.tempX = canvas.width - this.width;
    }
    


    checkBallCollusion(ball){
        if (ball.bottom -10 < this.top) this.up = true;
        if (ball.left < this.right && ball.right > this.left && ball.top < this.bottom && ball.bottom > this.top && this.up ){
            ball.direction.y *= -1;
            var diff =2*(this.x + this.width/2 - ball.center.x)/ this.width;
            ball.direction.x -=  diff;
            ball.makeUnitDirection();
            ball.bottom = launcher.top - 2;
             
             if (Math.abs(ball.direction.y) < 0.1){
                 if (ball.direction.y < 0) ball.direction.y = - .17;
                 else ball.direction.y = .17;
                 ball.makeUnitDirection();
                 console.log("less than")
             }
             ball.center.x = ball.prevCenter.x;
             ball.center.y = ball.prevCenter.y;
            }
            this.up=false;
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