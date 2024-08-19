
//This code creates the grid.
let container = document.querySelector("#container");
let button = document.querySelector("#newgrid");
let gridH = 16;
let gridW = 16;
let gridNum = gridH * gridW;
container.style.width = `${gridW *10}px`;

for (let i=0;i<gridNum;i++){
    newDiv = document.createElement("div");
    newDiv.className = ("grid");
    container.append(newDiv);
}

// This code changes grid backgrounds on hover.
function changeColor(evt) {
    if (evt.target.className === "grid"){
        evt.target.className = "grid grid-grey1";
    } else if (evt.target.className === "grid grid-grey5"){
    } else {
        let greyNum = evt.target.className.substr(-1,1);
        console.log(evt.target.className);
        console.log(greyNum);
        greyNum = parseInt(greyNum);
        evt.target.className = `${evt.target.className.slice(0,-1)}${greyNum+1}`
    }
}

    /* This code is for the hover to give each square a random grey (extra credit #1). 
    This code was removed from changeColor()
    let randColorNum = Math.random() * 3;
    if (randColorNum <1){
        evt.target.className = ("grid grid-grey1");
    } else if (randColorNum <2) {
        evt.target.className = ("grid grid-grey2");
    } else {
        evt.target.className = ("grid grid-grey3");
    }*/

let gridDiv = document.querySelectorAll(".grid");

for (let i=0;i<gridNum;i++){
    gridDiv[i].addEventListener("mouseenter",changeColor);
}



//This code creates a new grid when new grid button is pushed.
function newGridSize() {
    let newLength = prompt("How long do you want your grid? (Max of 100)", 16);
    if (newLength >100){
        newLength = 100;
    }
    let newGridH = newLength;
    let newGridW = newLength;
    let newGridNum = newGridH * newGridW;
    container.style.width = `${newGridW *10}px`;
    for (let i=0;i<gridNum;i++){
        gridDiv[i].remove();
    }
    for (let j=0;j<newGridNum;j++){
        newDiv = document.createElement("div");
        newDiv.className = ("grid");
        container.append(newDiv);
    }
    gridDiv = document.querySelectorAll(".grid");
    for (let i=0;i<newGridNum;i++){
        gridDiv[i].addEventListener("mouseenter",changeColor);
    }
    gridNum = newGridNum;
}

button.addEventListener("click",newGridSize);