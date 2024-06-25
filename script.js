const COLORS = ['red', 'green', 'blue', 'yellow', 'magenta', 'cyan']
const container = document.querySelector(".container")
const sizeBtn = document.querySelector(".customize")
const rainbowBtn = document.querySelector("#rainbow")
const shadeBtn = document.querySelector("#shade")

let rainbow = false;
let shade = false;
let size = 16;

rainbowBtn.addEventListener("click", () => {
  rainbow = !rainbow
  if (shade == true) {
    shade = !shade
  }
})

shadeBtn.addEventListener("click", () => {
  shade = !shade
  if (rainbow == true) {
    rainbow = !rainbow
  }
})

sizeBtn.addEventListener("click", () => {
  size = prompt("Enter the dimention of you canvas (Limit: 100)")
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createCanvas(size)
})

function randomColor() {
  random = Math.floor(Math.random() * 6)
  return COLORS[random]
}

function createCanvas(size) {
  for (let i = 0; i < size; i++) {
    let box = document.createElement("div")
    box.classList.add("box")
    container.appendChild(box)
  }

  let boxes = document.querySelectorAll(".box")
  boxes.forEach((box) => {
    for (let i = 0; i < size; i++) {
      let cell = document.createElement("div")
      cell.classList.add("cell")
      box.appendChild(cell)
    }
  })

  let cells = document.querySelectorAll(".cell")
  cells.forEach(cell => {
    let opacity = 0.1
    cell.addEventListener("mouseover", () => {
      if (rainbow == true) {
        cell.style.backgroundColor = randomColor()
      } else if (shade == true) {
        cell.style.backgroundColor = "black"
        cell.style.opacity = opacity
        if (opacity <= 1) {
          opacity = opacity + 0.1
        }
      } else {
        cell.style.backgroundColor = "black"
      }
    })
  })
}

createCanvas(size)