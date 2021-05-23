class Power {
    constructor(time=250, type='magnet'){
        this.type = type;
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
        this.speed = 2;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.center.x , this.center.y ,this.radius, 0, 2 * Math.PI);
        ctx.fillStyle='#dd5';
        ctx.fill();
    }

    update(){
        this.center.y += this.speed;
    }
    activate(indx){
        if(!this.activated) 
        {
            this.activated = true;
            this.index = indx;
            this.startTime = fcount;
        }        
    }

    drawBar(ctx){
        if (this.activated && !this.terminated){
        ctx.beginPath();
        ctx.fillStyle='#dd5145';
        ctx.fillRect(this.bar.x + this.index*this.initialWidth,this.bar.y,this.width, this.height);
        ctx.font = "16px Arial";
        ctx.fillText(this.type, this.bar.x +this.index*this.initialWidth,this.bar.y+this.height+16)
        this.remainingTime = this.time - (fcount - this.startTime);
        this.width = this.initialWidth  * (this.remainingTime/this.time); }
        if(this.remainingTime<0) {log(this.type +' finsished');this.terminated = true;}

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
}