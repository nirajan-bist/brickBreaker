

// import Ball from "./Ball.js"

var ball = new Ball()
var launcher = new Launcher()

for (x of range(12)) bricks.push(new Brick(x*80, 1*30, 6));
for (x of range(12)) bricks.push(new Brick(x*80, 2*30, 5));
for (x of range(12)) bricks.push(new Brick(x*80, 3*30, 4));
for (x of range(12)) bricks.push(new Brick(x*80, 4*30, 3));
for (x of range(12)) bricks.push(new Brick(x*80, 5*30, 2));
for (x of range(12)) bricks.push(new Brick(x*80, 6*30, 1, new Power(10000)));

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bricks.forEach((val)=>{val.draw(ctx)})
    ball.draw(ctx)
    launcher.draw(ctx)

}

function getDist(v){
    return v.x * v.x + v.y* v.y;
}
// 
var cx = false; cy= false;
function checkBrickCollusion(ball, brick,index){
    let collusionFlag=false;
    if (ball.left < brick.right && ball.right > brick.left && ball.top < brick.bottom && ball.bottom > brick.top ){
       var side = brick.getReflectionSide(ball.prevCenter)
       if (side == 'horizontal') ball.direction.y *= -1;
       else if (side == 'vertical') ball.direction.x *= -1;
       else {ball.direction.x *= -1; ball.direction.y *= -1;}
       collusionFlag = true;
        
     }
    
     if(collusionFlag) {
        
        var powerOnDestroy = brick.checkDamage(index,bricks);
        if(powerOnDestroy) fallingPowers.push(powerOnDestroy); //release power to the screen falling from top to bottom

        if (Math.abs(ball.direction.y) < 0.1){
            if (ball.direction.y < 0) ball.direction.y = - .17;
            else ball.direction.y = .17;
            ball.makeUnitDirection();
            console.log("less than")
        }
        ball.center.x = ball.prevCenter.x;
        ball.center.y = ball.prevCenter.y;
    }
}

function checkCollusion(){
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
        else {ball.bottom = canvas.height; gameOver = true;}
        // location.reload();
        // log(ball.direction)
    }
    // cx = false; cy= false;
    bricks.forEach(
        (brick,index)=>{checkBrickCollusion(ball,brick,index)}
        );
    
    
}
function nextFrame(){
    // setTimeout(
    //     ()=>{

            checkCollusion();
            launcher.x = launcher.tempX;
            launcher.checkBallCollusion(ball);
            draw();
            ball.update();
            if (!gameOver) requestAnimationFrame(nextFrame);
    //     },
    //     100
    // );
}
function slow(){
    setTimeout(
        ()=>{
            checkCollusion();
            launcher.x = launcher.tempX;
            launcher.checkBallCollusion(ball);
            draw();
            ball.update();
            if (!gameOver) requestAnimationFrame(nextFrame);
        },
        100
    );
}
// nextFrame = slow;   
requestAnimationFrame(nextFrame)
window.addEventListener('resize',resize)
window.addEventListener('mousemove', launcher.holdPosition.bind(launcher))



