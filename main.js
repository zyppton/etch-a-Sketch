const grid = 256;

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

