// Get references to grid container and control buttons
let container = document.getElementById("grid-container");
let blackModeButton = document.getElementById("black-mode");
let colourModeButton = document.getElementById("colour-mode");
let clearModeButton = document.getElementById("clear");
let clickedColour = "red";
let randomColourMode = false;
let clearColour = "white";


// Event listener for black mode button
blackModeButton.addEventListener("click", () => {
    randomColourMode = false;
    changeColourToBlack();
});


// Event listener for colour mode button
colourModeButton.addEventListener("click", () => {
    randomColourMode = true;
    makeGridInteractive(clickedColour);
});


// Event listener for clear mode button
clearModeButton.addEventListener("click", () => {
    randomColourMode = false;

    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = clearColour;
        });
});


function makeGrid(widthSquares, heightSquares) {
    container.style.gridTemplateColumns = `repeat(${widthSquares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${heightSquares}, 1fr)`;

    for (let i = 0; i < (widthSquares * heightSquares); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    };
    makeGridInteractive(clickedColour);
};


function drawGrid() {
    // refresh the grid as if there was no grid before
    container.innerHTML = "";

    let userPrompt = parseInt(prompt("What size of grid do you want? ", 16));

    if (Number.isInteger(userPrompt) === true && userPrompt > 0 && userPrompt < 65) {
        alert(`You have chosen a ${userPrompt} by ${userPrompt} grid to sketch`);
        makeGrid(userPrompt, userPrompt);
    } else {
        alert("Enter a number between 1 and 64 (inclusive). Defaulting to a 16x16 grid.");
        makeGrid(16, 16);
    }
    makeGridInteractive(clickedColour);
}


function makeGridInteractive(clickedColour) {
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("click", () => {
            // set the square colour
            // if randomColourMode is true use getRandomColour function to get the colour
            // if randomColourMode is false, use the current clickedColour value
            square.style.backgroundColor = randomColourMode ? getRandomColour() : clickedColour;
        });
    });
}


function changeColourToBlack() {
    clickedColour = "black";
    makeGridInteractive(clickedColour);
}


function changeColourToRandom() {
    clickedColour = getRandomColour();
    makeGridInteractive(clickedColour);
}


function getRandomColour() {
    const hexLetters = "0123456789ABCDEF";
    let colour = "#";

    for (let i = 0; i < 6; i++) {
        colour += hexLetters[Math.floor(Math.random() * 16)];
    }
    return colour
}
// create a 16x16 grid by default
makeGrid(16, 16);
