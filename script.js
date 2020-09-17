// create browser "etch-a-sketch" using only JS

const body = document.querySelector(`body`);
const gridContainer = document.querySelector(`#gridContainer`);
let divs = [];
let gridItems = document.querySelectorAll(`.gridItem`)

// default
let numOfResets = 0;
createGrid(4);

// create grid
function createGrid(num) {
    // create gird divs
    num *= num;
    for (let i = 0; i < (num); i++) {
        divs[i] = document.createElement(`div`);
        divs[i].classList.add(`gridItem`);
    }

    // add divs to DOM
    for (let i = 0; i < (num); i++) {
        gridContainer.appendChild(divs[i]);
    }

    // create mouse-over color change
    gridItems = document.querySelectorAll(`.gridItem`)
    console.log(gridItems);
    let colorCount = 0;
    gridItems.forEach((div) => {
        div.addEventListener(`mouseover`, function (e) {
            if ((Math.floor(Math.random() * 100)) < ((numOfResets + 1) * 10)) {
                color = `black`;
            } else {
                color = getRandomColor();
            }
            console.log(color);
            e.target.style.backgroundColor = color;
            colorCount += 1;
        })
    })
    numOfResets += 1;
}

// Random color generator function
function getRandomColor() {
    let letters = `0123456789ABCDEF`;
    let color = `#`;
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// create reset button
const resetBtn = document.createElement(`button`);
resetBtn.classList.add(`btn`);
resetBtn.textContent = `Reset`;

// create div for reset button, add to DOM
const btnDiv = document.createElement(`div`);
btnDiv.setAttribute(`id`, `resetContainer`)
body.insertBefore(btnDiv, gridContainer);
btnDiv.appendChild(resetBtn);

// create reset prompt
let grids;
let width = 0;
let height = 0;
resetBtn.addEventListener(`click`, function (e) {
    for (i = 0; i < divs.length; i++) {
        gridContainer.removeChild(divs[i]);
    }
    let grids = prompt(`Reset to how many columns/rows?`);
    if (isNaN(grids)) {
        grids = prompt(`Please enter a number!`);
    } else {
        console.log(grids);
        width = 100 / grids;
        width = width + `%`;
        console.log(width);
        createGrid(grids);
        // change grid size
        gridItems.forEach((div) => {
            div.style.width = width;
            div.style.height = width;
        })
    }
})