class Launcher{
    constructor(bottom=0,damage=1){
        this.powers = [];
        this.length = 'normal'
        this.width = 180;
        this.height = 20;
        this.x = (canvas.width-this.width)/2 ;
        this.y = canvas.height-this.height -20 ;
        this.color=['blue','red','green','black','orange','yellow']
        this.life = 10
        this.tempX=this.x;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle=this.color[3]
        ctx.fillRect(this.x, this.y, this.width, this.height);

    }

    holdPosition(e){
        var rct=canvas.getBoundingClientRect();
        this.tempX = e.clientX - rct.left- this.width/2;
        if (this.tempX < 0) this.tempX = 0;
        if (this.tempX > canvas.width - this.width) this.tempX = canvas.width - this.width;
    }
    
    testCornorCollision(ball)
    {
    var tx, ty, sign=-1;
    if (ball.center.x < this.left) {tx = this.left; sign=1}
    else tx = this.right;
    
    ty = this.top;

    var dx = ball.center.x - tx
    var dy = ball.center.y - ty  
    var dist = Math.sqrt((dx*dx)+(dy*dy))
    if (dist<=ball.radius) {
        ball.direction.x += dx/dist;
        ball.direction.y *=-1;
        ball.direction.y += dy/dist;
        ball.makeUnitDirection();
        console.log(getDist(ball.direction))
        // ball.bottom = ty 
        // ball.center.x = tx-ball.radius*sign;
        return true
    }

}


    checkBallCollusion(ball){
        // let collusionFlag=false;
        if (ball.bottom > this.top && ball.center.x > this.left && ball.center.x < this.right){
            ball.direction.y *= -1;
            var diff =2*(this.x + this.width/2 - ball.center.x)/ this.width;
            ball.direction.x -=  diff;
            ball.makeUnitDirection();
            if (ball.bottom > this.bottom)
                ball.top = this.bottom
            else
                ball.bottom = this.top
            log('ok')
            // collusionFlag = true;
            
         }
        else if (ball.right > this.left && ball.left < this.right && ball.center.y > this.top && ball.center.y < this.bottom){
            ball.direction.x *= -1;
            if(ball.left<this.left) 
                 ball.right = this.left;
            else 
                 ball.left = this.right;
                 // log("LR",`${ball.left.toString()+" "+ball.right+" "+ball.top+" "+ball.bottom}`, this)
                //  collusionFlag = true;       
         }
        else this.testCornorCollision(ball);
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