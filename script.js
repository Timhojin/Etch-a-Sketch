const container = document.querySelector("#container");
let gridsPerSide = 16;

let row = [];
let grid = [];

for(let i = 1; i <= gridsPerSide; i++) {
    row[i] = document.createElement("div");
    row[i].setAttribute("style", "display: flex; flex: 1;");
    container.appendChild(row[i]);

    for(let j = 1; j <= gridsPerSide; j++) {
        grid[j] = document.createElement("div");
        grid[j].setAttribute("style", "flex: 1; border: 1px solid black;");
        row[i].appendChild(grid[j]);
        grid[i].addEventListener("mouseover", () => {
            grid[i].style.background = "red";
        });
    }
}

let oldGridsPerSide = gridsPerSide;

const changeGrid = document.querySelector("#change-grids");
changeGrid.addEventListener("click", () => {
    gridsPerSide = parseInt(prompt("How many grids do you want per side?\nPlease enter a number between 1 - 100"));
    
    for(let i = 1; i <= oldGridsPerSide; i++) {
        container.removeChild(row[i]);
    }

    for(let i = 1; i <= gridsPerSide; i++) {
        row[i] = document.createElement("div");
        row[i].setAttribute("style", "display: flex; flex: 1;");
        container.appendChild(row[i]);
    
        for(let j = 1; j <= gridsPerSide; j++) {
            grid[j] = document.createElement("div");
            grid[j].setAttribute("style", "flex: 1; border: 1px solid black;");
            row[i].appendChild(grid[j]);
            grid[i].addEventListener("mouseover", () => {
                grid[i].style.background = "red";
            });
        }
    }

    oldGridsPerSide = gridsPerSide;
});
