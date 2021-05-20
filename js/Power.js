class Power {
    constructor(time=10000){
        this.type = 'magnet';
        this.time = time;
        this.center = {x:300, y:400};
        this.bar ={x:10, y:10}
        this.width = 200;
        this.initialWidth = this.width;
        this.height = 10;
        this.activated = false;
        this.terminated = false;
        this.startTime = null;
        this.index = null;
        this.remainingTime = this.time;
        this.radius = 10;
    }

    draw(ctx){
        ctx.beginPath()
        ctx.arc(this.center.x + this.index * (20 + 2* this.radius),this.center.y,this.radius,0,2*Math.PI);
        ctx.fillStyle='#48666d'
        ctx.fill()
    }

    activate(indx){
        if(!this.activated) 
        {
            this.activated = true;
            this.index = indx;
            this.startTime = Date.now()
        }
        //check timeStamp differnce to adjust againt animationFrame freeze
        var currentRemTime = this.time -(Date.now()-this.startTime);
        var diff =  this.remainingTime - currentRemTime;
        if(diff > 40) this.startTime += diff;
        
    }
    drawBar(ctx){
        if (this.activated && !this.terminated){
        ctx.beginPath()
        ctx.fillStyle='#dd5145'
        ctx.fillRect(this.bar.x + this.index*this.initialWidth,this.bar.y,this.width, this.height);
        this.remainingTime = this.time - (Date.now() - this.startTime);
        this.width = this.initialWidth  * (this.remainingTime/this.time); }
        if(this.remainingTime<0) {log('magenet finsished');this.terminated = true;}

    }
}