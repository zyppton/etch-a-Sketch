const btn = document.querySelector("#btn");

const container = document.createElement("div");
container.id = "container";

document.body.appendChild(container);

function deleteGrid() {

    const gridSquaresTwo = document.querySelectorAll(".square");
    gridSquaresTwo.forEach(part => {
        part.remove();
    });

}

function createGrid(side = 16) {
    let grid = side * side;
    let squareSize = 600 / side;
    let squareString = `${squareSize}`;

    for (i = grid; i > 0; i--) {
        const square = document.createElement("div");
    
        square.classList.add("square");
        square.style.width = squareString + "px";
        square.style.height = squareString + "px";
        container.appendChild(square);
    };
    const gridSquaresThree = document.querySelectorAll(".square");

    gridSquaresThree.forEach(piece => {
        piece.addEventListener("mouseover", () => {
            piece.style.backgroundColor = "black";
        });
    });

};


createGrid();

btn.addEventListener("click", () => { 
    let userNumber = prompt("Enter number between 1-100");
    if (userNumber > 0 && userNumber <= 100) {
        deleteGrid();
        createGrid(userNumber);
    } else{
        alert("Number is not between 0-100 try again");
    }
});
