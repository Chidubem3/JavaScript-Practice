const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

/*
ctx.fillStyle = 'red';
// x,y,width,height
// ctx.fillRect(0,0,400,500);
// Better way to do the avoid code
ctx.fillRect(0,0,canvasWidth/2,canvasHeight)
// ctx.fillStyle = 'green';
// ctx.fillRect(canvasWidth/2,0,canvasWidth/2,canvasHeight)
ctx.clearRect(40,30,50,50)
ctx.clearRect(100,30,50,50)

ctx.lineWidth = 7;
ctx.strokeStyle = 'blue';
ctx.moveTo(0,0);
ctx.lineTo(canvasWidth,canvasHeight);
ctx.stroke();


/*
//  attempt Nigeria flag
ctx.fillStyle = 'green';
ctx.fillRect(266,0,267,canvasHeight)
*/

// Asignment
// Draw the Nigerian Flag
// The German
// The French flag
// Draw a robot face
// Draw a computer set
// Draw a triangle using lines
const rightBtn = document.getElementById('rightBtn');
const leftBtn = document.getElementById('leftBtn');
const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');
let playersize = 50
let playerX = 0;
let playerY = canvasHeight - playersize;
ctx.fillStyle = 'hotpink';
ctx.fillRect(0,canvasHeight - playersize,playersize,playersize);
let keyBeingPassed;

const downMovement = ()=>{
    ctx.clearRect(0,0, canvasWidth, canvasHeight)
    playerY+=50;
    ctx.fillRect(playerX,playerY,playersize,playersize);
}
// a better way to write this functions

const gameUpdate = (keyBeingPassed)=>{
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
    switch (keyBeingPassed) {
        case "w":
            playerY -=50;
            if (playerY <= 0) {
                playerY = 0;
                 ctx.fillStyle = 'blue';
            }else{
                ctx.fillStyle = 'hotpink';
            }
            break;
        case "d":
            playerX +=50;
            if (playerX >= (canvasWidth - playersize)) {
                playerX = canvasWidth - playersize;
                ctx.fillStyle = 'red';
            }else{
                ctx.fillStyle = 'hotpink';
            }
            break;
        case "a":
            playerX -=50;
            if (playerX <= 0) {
                playerX =0;
                ctx.fillStyle = 'green';               
            }else{
                ctx.fillStyle= 'hotpink';
            }
            break;
        case "s":
            playerY +=50;
            if (playerY >= canvasHeight - playersize) {
                playerY = canvasHeight - playersize;
                ctx.fillStyle= 'yellow';
            }else{
                ctx.fillStyle= 'hotpink';
            }
            break;
        default:
            break;
    };

    if (playerX < 0) {
       playerX = 0; // this is to stop it from going beyond the width of the canvas
        // playerX = canvasWidth - playersize // this is to make it come out from the other end
    } 
    else if(playerX >= (canvasWidth - playersize)){
        // playerX=0 // this is to make it come out from the other end
        playerX = canvasWidth - playersize;// this is to stop it from going beyond the width of the canvas      
    }
    else if(playerY <= 0){
        playerY = 0; // this is to stop it from going beyond the height of the canvas
        // playerY = canvasHeight - playersize // this is to make it come out from the other end

    }
    else if(playerY >= canvasHeight - playersize){
        //   playerY = 0 // this is to make it come out from the other end
        playerY = canvasHeight - playersize;// this is to stop it from going beyond the height of the canvas
    }


    ctx.fillRect(playerX,playerY,playersize,playersize);
}

rightBtn.addEventListener('click',()=>{
    gameUpdate('d');
})

leftBtn.addEventListener('click',()=>{
    gameUpdate('a');
})

upBtn.addEventListener('click',()=>{
    gameUpdate('w');
})


downBtn.addEventListener('click',()=>{
    gameUpdate('s');
})

// keydown and keypress serves the same purpose
// W - up movemwnt
// S - down
// A - left
// D - right


document.addEventListener("keydown",(whatkey)=>{
    keyBeingPassed = whatkey.key.toLowerCase();
    if (whatkey.key.toLowerCase()=='w') {
        // console.log(whatkey);
        // console.log("this is pressed is ="+ whatkey.key);
        gameUpdate('w');
    }
    if (whatkey.key.toLowerCase()=='s') {
        gameUpdate('s');
    }
    if (whatkey.key.toLowerCase()=='a') {
        gameUpdate('a');
    }
    if (whatkey.key.toLowerCase()=='d') {
        gameUpdate('d');
    }
})
