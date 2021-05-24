class Power {
    constructor(){
        this.time = 150;
        this.center = {x:300, y:400};
        this.bar ={x:60, y:20}
        this.width = 200;
        this.initialWidth = this.width;
        this.height = 15;
        this.activated = false;
        this.terminated = false;
        this.startTime = null;
        this.index = null;
        this.remainingTime = this.time;
        this.radius = 15;
        this.speed = 2;
        this.barLocation = [sprite2, 0,576, 282, 10];
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.center.x , this.center.y ,this.radius, 0, 2 * Math.PI);       
        // ctx.fillStyle='blue';
        // ctx.fill();
        ctx.drawImage(...this.spriteLocation, this.left, this.top, 30, 30);
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
            this.powerActivate();
        }        
    }
    terminate(){
        if(this.remainingTime<0) {
            log(this.type +' finsished');
            this.terminated = true;
            this.powerTerminate();
        }
    }

    drawBar(ctx){
        if (this.activated && !this.terminated){
        ctx.beginPath();
        ctx.fillStyle='#dd5145';
        // ctx.fillRect(this.bar.x + this.index*this.initialWidth,this.bar.y,this.width, this.height);
        
        // ctx.fillStyle ='white';
        // ctx.arc(this.bar.x + this.radius + this.index*this.initialWidth , this.bar.y + this.height/2 ,this.radius, 0, 2 * Math.PI); 
        // ctx.fill()
        ctx.font = "16px Arial";
        let remPercent = this.width/this.initialWidth * 100;
        let xCord = (this.index%3) * (this.bar.x +this.initialWidth + 10)
        let vCord =  parseInt(this.index/3) * 50 + this.bar.y ;

        ctx.drawImage(...this.spriteLocation,  xCord, vCord - this.height/2 ,30, 30);
        ctx.drawImage(...this.barLocation, xCord + 30, vCord, this.width, this.height);
        ctx.fillText(''+remPercent.toFixed(0)+' %',  xCord +32+ this.width ,vCord + this.height)
        this.remainingTime = this.time - (fcount - this.startTime)
        this.width = this.initialWidth  * (this.remainingTime/this.time); }
        this.terminate();

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

    powerActivate(){}
    powerTerminate(){}
}

class Shrink extends Power{
    constructor(){
        super();
        this.type = "Shrink";
        this.spriteLocation = [sprites2,215,5,60,60];
    }
    powerActivate(){
        if (launcher.width/2 >= launcher.minWidth) launcher.width /= 2;
    }
    // powerTerminate(){
    //     launcher.width *= 2;
    // }
}

class Bullet extends Power{
    constructor(){
        super();
        this.type = "Bullet";
        this.spriteLocation = [sprites2,215,65,60,60];
    }
}

class ChakraBall extends Power{
    constructor(){
        super();
        this.type = "ChakraBall";
        this.spriteLocation = [sprites2,216,125,60,60];
    }
}

class ScoreMultiplier extends Power{
    constructor(){
        super();
        this.type = "X-Score";
        this.spriteLocation = [sprites2,216,185,60,60];
    }
}
class Magnet extends Power{
    constructor(){
        super();
        this.type = "Magnet";
        this.spriteLocation = [sprites2,216,245,60,60];
    }
    powerActivate(){
        launcher.hasMagnet = true;
    }
    powerTerminate(){
        launcher.hasMagnet = false;
    }
}

class BallMultiplier extends Power{
    constructor(){
        super();
        this.type = "X-Ball";
        this.spriteLocation = [sprites2,216,365,60,60];
    }

    powerActivate(){
        log('hi');
        var r=0;
        balls.forEach(
            (ball)=>{
                let center = {...ball.center}
                let direction = getRandomDirection();
                log(center,direction);
                let newball = new Ball(center,direction);
                newball.direction.x += .18;
                newball.makeUnitDirection();
                balls.push(newball);
            });

    }
}

class FireBall extends Power{
    constructor(){
        super();
        this.type = "FireBall";
        this.spriteLocation = [sprites2,216,425,60,60];
    }
}

class Expand extends Power{
    constructor(){
        super();
        this.type = "Expand";
        this.spriteLocation = [sprites2,216,485,60,60];
    }
    powerActivate(){
        if (launcher.width*2 <= launcher.maxWidth) launcher.width *= 2;
    }
    // powerTerminate(){
    //     launcher.width /= 2;
    // }
}

class SpeedUp extends Power{
    constructor(){
        super();
        this.type = "Speed-UP";
        this.spriteLocation = [sprites2,158,65,60,60];
    }
}

class SpeedDown extends Power{
    constructor(){
        super();
        this.type = "Speed-DOWN";
        this.spriteLocation = [sprites2,158,125,60,60];
    }
    
}
