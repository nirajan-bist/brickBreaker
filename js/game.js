

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
var bricks=[...Array(1)].map((_, index)=>{var x=new Brick(); x.left+=index*x.width+index*10; return x;});
log(bricks);
// bricks=new Ball()

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw(ctx)
    bricks.forEach((val)=>{val.draw(ctx)})
}
resize();

function changeDirection(ball, sign){
    ball.direction = sign * 180 - ball.direction;
}

function checkBrickCollusion(brick, sign){
    if (ball.right > brick.left && ball.left < brick.right && ball.center.y > brick.top && ball.center.y < brick.bottom){
       changeDirection(ball,sign)
       
       if(ball.left<brick.left) 
            ball.right = brick.left;
       else 
            ball.left = brick.right;
       
            log("LR",`${ball.left.toString()+" "+ball.right+" "+ball.top+" "+ball.bottom}`, brick)
       
    }
    else if (ball.bottom > brick.top && ball.top < brick.bottom && ball.center.x > brick.left && ball.center.x < brick.right){
        changeDirection(ball,0)
        if (ball.bottom > brick.bottom)
            ball.top = brick.bottom
        else
            ball.bottom = brick.top
        log(ball.center, brick)
        
     }
}

function checkCollusion(){
    var sign = (ball.direction > 0) ? -1 : 1;
    if (ball.left < 0 || ball.right > canvas.width) 
    {
        changeDirection(ball, sign)
        // log(ball.direction)
    }
    if (ball.top < 0 || ball.bottom > canvas.height) 
    {
        changeDirection(ball, 0)
        // log(ball.direction)
    }

    bricks.forEach((brick)=>{checkBrickCollusion(brick,sign)});




}
function nextFrame(){
    // setTimeout(
    //     ()=>{
            checkCollusion();
            ball.update();
            draw();
            requestAnimationFrame(nextFrame);
//         },
//         25
//     );
}

requestAnimationFrame(nextFrame)
window.addEventListener('resize',resize)



