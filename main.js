let grid = 256;

const btn = document.querySelector("#btn");

const container = document.createElement("div");
container.id = "container";

document.body.appendChild(container);

for (i = grid; i > 0; i--) {
    const square = document.createElement("div");

    square.classList.add("square");

    container.appendChild(square);
};

const gridSquares = document.querySelectorAll(".square");


gridSquares.forEach(piece => {
    piece.addEventListener("mouseover", () => {
        piece.style.backgroundColor = "red";
        console.log("hey");
    });
});

function createGrid() {
    let userNumber = prompt("Enter number between 1-100");

    if (userNumber > 0 && userNumber <= 100) {
        grid = userNumber * userNumber;
        let squareSize = 600 / userNumber;
        let squareString = `${squareSize}`;
        const gridSquaresTwo = document.querySelectorAll(".square");
        gridSquaresTwo.forEach(part => {
            part.remove();
        });
        


        for (i = grid; i > 0; i--) {
            const square = document.createElement("div");
        
            square.classList.add("square");
            square.style.width = squareString;
            square.style.height = squareString;
            container.appendChild(square);
        };
        const gridSquaresThree = document.querySelectorAll(".square");

        gridSquaresThree.forEach(piece => {
            piece.addEventListener("mouseover", () => {
                piece.style.backgroundColor = "red";
                console.log("hey");
            });
        });
    }else {
        alert("Number is not between 0-100 try again")
    }

};

btn.addEventListener("click", () => createGrid());
