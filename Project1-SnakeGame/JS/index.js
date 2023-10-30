let inputDir = {
    x: 0,
    y: 0
}; 

const fooodSound = new Audio("../Project1/Assets/food.mp3");
const gameOverSound = new Audio("../Project1/Assets/gameover.mp3");
const moveSound = new Audio("../Project1/Assets/move.mp3");


let name=localStorage.getItem("name");
console.log(name);
document.getElementById("player-name").innerText=`UserName : ${name}`;

let k=localStorage.getItem("high");

document.getElementById("high-Id").innerText=`High Score : ${k}`



let speed = 4;
let lastPaintTime = 0;
let score=0;


//basically this are the coordinated of the snake start point
// so in this array the co-ordinates will be keep on adding like when snake eats the food 
// its like position of head, then body-div-1 position ,then snake will eat more foos the one more snake-body-div will be created it position to push on the board in gameEngine function
let snakeArr = [{
    x: 13,
    y: 15
}];//initial position of the snake 


let foodPosition = {
    x: 12,
    y: 8
};



//so this caller calls the recursive function and loop keeps on running;
function main(ctime) {
   


    window.requestAnimationFrame(main);
    // console.log(ctime)
    //descresing the fps speed of game 
    //DOUBT
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;

    //when each frame is added call this function to two show movement of snake and to render food/snake;
    gameEngine();


}

//this function will update/display the snake(array) and food
function gameEngine() {

    //updating the position of snake array and food

    if(isCollide(snakeArr)){
         
        document.getElementById("score-Id").innerText=`Score : 0`
         gameOverSound.play();
         moveSound.pause();
         inputDir = {
            x: 0,
            y: 0
        }; 
        alert("Game Over. Press any key to play again!");
        snakeArr=[{
            x: 13,
            y: 15
        }];
        moveSound.play();
       
        score=0;
    }

    // if you yet the food ,increment the score and regenerate the food

    if(snakeArr[0].y===foodPosition.y && snakeArr[0].x===foodPosition.x){
        fooodSound.play();
        score++;

        var h=localStorage.getItem("high");

         if(h<score){
            localStorage.setItem("high",score);
            var h=localStorage.getItem("high");
            document.getElementById("high-Id").innerText=`High Score : ${h}`
         }
         document.getElementById("high-Id").innerText=`High Score : ${h}`
        
        snakeArr.unshift({
               x:snakeArr[0].x + inputDir.x,
               y:snakeArr[0].y+inputDir.y
           })
           console.log(snakeArr);
        let a=2;
        let b=16;

        document.getElementById("score-Id").innerText=`Score : ${score}`

       

        //generatin the new food position on the board;
        foodPosition={
               x:Math.round(a+(b-a)*Math.random()),
               y:Math.round(a+(b-a)*Math.random())
           }
    }


    //moving the snake 
    for(let i=snakeArr.length-2;i>=0;i--){
           snakeArr[i+1]={...snakeArr[i]};

    }

    snakeArr[0].x+=inputDir.x;
    snakeArr[0].y+=inputDir.y;





    //display the snake and food 
    //so just grab the board and append the snake and food

    //every time the function is called remove the previous position of snake image and append its current position
    // DOUBT
    // {
    //     However, if you remove the document.getElementById("board") line, your code will still work as long as 
    //     there is an HTML element with the id "board" in your document. In this case, board becomes an implicit global 
    //     variable because it wasn't declared with var, let, or const. This means that the variable is accessible from anywhere i
    //     n your JavaScript code, and JavaScript will look for an element with the id "board" in the global scope.
    // }

    let board = document.getElementById("board");
    board.innerHTML = " ";

    //display the snake
    snakeArr.forEach((elem, index) => {
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = elem.y;
        snakeElement.style.gridColumnStart = elem.x;

        if (index == 0) {
            snakeElement.classList.add("snake-face");
        } 

        if(index%2==0 && index!==0){
            snakeElement.classList.add("snake-body");
        }

        if(index%2!=0 && index!==0){
            snakeElement.classList.add("snake-body-1");
        }


        board.appendChild(snakeElement);
    })

    //display the food;

    let foodElement = document.createElement('div');
    foodElement.classList.add("food");
    foodElement.style.gridRowStart = foodPosition.y;
    foodElement.style.gridColumnStart = foodPosition.x;
    board.appendChild(foodElement);






}

function isCollide(sArr){
     
    //if snake collides into itself;
    for(let i=1;i<sArr.length;i++){
          if(sArr[i].x===sArr[0].x && sArr[i].y===sArr[0].y){
             return true;
          }
          
    }
    // if snake collide into wall
    if(sArr[0].x>=18 || sArr[0].x <=0  || sArr[0].y>=18 || sArr[0].y <=0 ){
        return true;
      }
   
}


//recursive caller to keep game running;

window.requestAnimationFrame(main)


//logic building 

window.addEventListener('keydown', e => {

    moveSound.play();

    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x=0;
            inputDir.y=-1;
            break;
        case "ArrowDown":
            console.log("A-d")
            inputDir.x=0;
            inputDir.y=1;
            break;
        case "ArrowLeft":
            console.log("A-l")
            inputDir.x=-1;
            inputDir.y=0;
            break;
        case "ArrowRight":
            console.log("A-r")
            inputDir.x=1;
            inputDir.y=0;
            break;
        default:
            break;
    }





})
