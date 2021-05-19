function getRadian(degree){
    return degree * Math.PI / 180;
}

function range(number){
    return Array(number).keys()
}


function log(...args){
    console.log(...args);
}

function getDistance(point,corner){
    var x = point.x-corner.x;
    var y = point.y-corner.y;
    return Math.sqrt(x*x + y*y )
}

var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
function resize(){
   canvas.width = canvas.parentElement.clientWidth;      
   canvas.height = canvas.parentElement.clientHeight;  

}
resize();
