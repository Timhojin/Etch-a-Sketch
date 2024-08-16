const container = document.querySelector("#container");

function makeGrid(size) {
    for(let i = 1; i <= size; i++) {
        let row = document.createElement("div");
        row.setAttribute("style", "flex: 1; display: flex;");
        container.appendChild(row);
        for(let j = 1; j <= size; j++) {
            let square = document.createElement("div");
            square.setAttribute("style", "flex: 1; border: black solid 1px;");
            row.appendChild(square);

            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "red";
            });
        }
    }
}

makeGrid(16);

const button = document.querySelector("#change-grids");
button.addEventListener("click", () => {
    let size = parseInt(prompt("How many squares do you want per side?\n Please insert a number between 1-100."));

    container.innerHTML = "";
    makeGrid(size);
});