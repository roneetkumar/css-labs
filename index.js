// use 'strict'

let left = 1;
// let top = 0;

document.onkeydown = function(e){
    if (e.keyCode == 39) {
        document.querySelector(".daba").style.transform = `translateX(${left = left +10}px)`;
    }
    else if(e.keyCode == 37) {
        document.querySelector(".daba").style.transform = `translateX(${left = left - 10}px)`;
    }
 }
console.log(left);
