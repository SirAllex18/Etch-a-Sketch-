const grid = document.getElementById("grid-container")
const colorBtn = document.getElementById("color")
const rainbowBtn = document.getElementById("rainbow")
const eraseBtn = document.getElementById("erase")
const resetBtn = document.getElementById("reset")
const slider = document.getElementById("range-slider")
let sliderValue = document.getElementById("range-value")
const DEFAULT_SIZE = 16


function setupGrid(size){
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(let i = 0; i < size * size; i++){
        const gridDiv = document.createElement("div")
        gridDiv.addEventListener("mouseover", function(){
            gridDiv.style.backgroundColor = "red"
        })
        grid.appendChild(gridDiv);
    }
  
}

resetBtn.onclick = () => resetGrid()
slider.onmousemove = (e) => setupGrid(e.target.value)
slider.onchange = (e) => updateSize(e.target.value)

function resetGrid(){
    grid.innerHTML = ""
    setupGrid(DEFAULT_SIZE)
    updateSize(DEFAULT_SIZE)
    slider.value = "16";
}

function updateSize(value){
    sliderValue.innerHTML = `Grid size: ${value} x ${value}` 
}

window.onload = () => setupGrid(16);
