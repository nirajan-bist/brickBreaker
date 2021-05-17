

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

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw(ctx)
}
resize();

function checkCollusion(){
    if (ball.center.x < ball.radius || ball.center.x + ball.radius > canvas.width) 
    {
        var sign = ball.direction>0 ? -1 : 1;
        ball.direction = sign*180 - ball.direction;
        // log(ball.direction)
    }
    if (ball.center.y< ball.radius || ball.center.y + ball.radius > canvas.height) 
    {
        ball.direction = -ball.direction;
        // log(ball.direction)
    }
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



