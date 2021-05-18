function getRadian(degree){
    return degree * Math.PI / 180;
}

function range(number){
    return Array(number).keys()
}

for (i of range(5)) console.log(i);