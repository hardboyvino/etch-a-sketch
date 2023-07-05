function makeGrid(widthSquares, heightSquares) {
    let container = document.getElementById("grid-container");

    for (let i = 0; i < (widthSquares * heightSquares); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

makeGrid(16, 16);