let container = document.getElementById("grid-container");
let clickedColour = "black";

function makeGrid(widthSquares, heightSquares) {
    container.style.gridTemplateColumns = `repeat(${widthSquares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${heightSquares}, 1fr)`;

    for (let i = 0; i < (widthSquares * heightSquares); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    };
};


function drawGrid() {
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
    // let squares = document.querySelectorAll(".square");

    document.querySelectorAll(".square").forEach(square => {
        square.addEventListener("click", () => {
            square.style.backgroundColor = clickedColour;
        });
    });
}

drawGrid();