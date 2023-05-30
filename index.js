let hue = 0;

const container = document.getElementById("container");
const sizebtn = document.getElementById("set-size");

insertDiv(4);

sizebtn.onclick = () => {
  const size = prompt("Please enter size of grid.");
  if (size > 100) {
    alert("Sorry, maximum size is 100");
  } else {
    container.innerHTML = "";
    insertDiv(size);
  }
};

function insertDiv(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < size; i++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      grid.onpointerover = (e) => {
        e.target.style.background = `hsl(${hue}, 100%, 50%`;
        hue += 15;
      };
      row.appendChild(grid);
    }
    container.appendChild(row);
  }
}
