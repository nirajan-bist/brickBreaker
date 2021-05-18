

// import Ball from "./Ball.js"

function log(...args){
    console.log(...args);
}

var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
function resize(){
   canvas.width = canvas.parentElement.clientWidth;      
   canvas.height = canvas.parentElement.clientHeight;  

}


var ball = new Ball()
var bricks=[]

for (x of range(12)) bricks.push(new Brick(x*80, 1*30,5));
for (x of range(12)) bricks.push(new Brick(x*80, 2*30, 2));
for (x of range(12)) bricks.push(new Brick(x*80, 3*30));
for (x of range(12)) bricks.push(new Brick(x*80, 4*30, 3));
for (x of range(12)) bricks.push(new Brick(x*80, 5*30,5));
for (x of range(12)) bricks.push(new Brick(x*80, 6*30));

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw(ctx)
    bricks.forEach((val)=>{val.draw(ctx)})
}
resize();

function getDist(v){
    return v.x * v.x + v.y* v.y;
}

function testCornorCollision(ball,brick)
{
    var tx, ty;
    if (ball.center.x < brick.left) tx = brick.left;
    else tx = brick.right;
    
    if (ball.center.y < brick.top) ty = brick.top;
    else ty = brick.bottom;

    var dx = ball.center.x - tx
    var dy = ball.center.y - ty
    var dist = Math.sqrt((dx*dx)+(dy*dy))
    if (dist<=ball.radius) {
        ball.direction.x += dx/dist;
        ball.direction.y += dy/dist;
        ball.makeUnitDirection();
        // console.log(getDist(ball.direction))
        return true
    }


}

function checkBrickCollusion(ball, brick,index, sign){
    let collusionFlag=false;
    if (ball.right > brick.left && ball.left < brick.right && ball.center.y > brick.top && ball.center.y < brick.bottom){
       ball.direction.x *= -1;
       
       if(ball.left<brick.left) 
            ball.right = brick.left;
       else 
            ball.left = brick.right;
            // log("LR",`${ball.left.toString()+" "+ball.right+" "+ball.top+" "+ball.bottom}`, brick)
            collusionFlag = true;       
    }
    else if (ball.bottom > brick.top && ball.top < brick.bottom && ball.center.x > brick.left && ball.center.x < brick.right){
        ball.direction.y *= -1;
        if (ball.bottom > brick.bottom)
            ball.top = brick.bottom
        else
            ball.bottom = brick.top
        // log(ball.center, brick)
        collusionFlag = true;
        
     }
    else collusionFlag = testCornorCollision(ball,brick);
    
     if(collusionFlag) {
        brick.damage--;
        if (!brick.damage) bricks.splice(index,1);
    }
}

function checkCollusion(){
    let sign = (ball.direction > 0) ? -1 : 1;
    if (ball.left < 0 || ball.right > canvas.width) 
    {
        ball.direction.x = -ball.direction.x;
        if (ball.left < 0) ball.left=0
        else ball.right=canvas.width
        // log(ball.direction)
    }
    if (ball.top < 0 || ball.bottom > canvas.height) 
    {
        ball.direction.y = - ball.direction.y;
        if (ball.top < 0) ball.top = 0;
        else ball.bottom = canvas.height;
        // log(ball.direction)
    }

    bricks.forEach(
        (brick,index)=>{checkBrickCollusion(ball,brick,index,sign)}
        );




}
function nextFrame(){
    // setTimeout(
    //     ()=>{
            checkCollusion();
            draw();
            ball.update();
            requestAnimationFrame(nextFrame);
    //     },
    //     1
    // );
}

requestAnimationFrame(nextFrame)
window.addEventListener('resize',resize)



