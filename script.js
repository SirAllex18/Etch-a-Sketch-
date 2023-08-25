const grid = document.getElementById("grid-container")
const colorBtn = document.getElementById("color")
const rainbowBtn = document.getElementById("rainbow")
const eraseBtn = document.getElementById("erase")
const resetBtn = document.getElementById("reset")
const slider = document.getElementById("range-slider")
const DEFAULT_SIZE = 16
let sliderValue = document.getElementById("range-value")
let current_mode = "color"

function setupGrid(size){
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(let i = 0; i < size * size; i++){
        const gridDiv = document.createElement("div")
        gridDiv.addEventListener("mouseover", changeColor)    
        grid.appendChild(gridDiv);
        
    }
  
}

resetBtn.onclick = () => resetGrid()
slider.onmousemove = (e) => setupGrid(e.target.value)
slider.onchange = (e) => updateSize(e.target.value)
colorBtn.onclick = () => updateMode("color")
rainbowBtn.onclick = () => updateMode("rainbow")
eraseBtn.onclick = () => updateMode("erase")


function updateMode(newMode){
    if(newMode === "color"){
        current_mode = "color"
    }else if(newMode === "rainbow"){
        current_mode = "rainbow"
    }else if(newMode === "erase"){
        current_mode = "erase"
    }
}

function changeColor(){
    if(current_mode === "color"){
        this.style.backgroundColor = "red"
    }else if(current_mode === "rainbow"){
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }else if(current_mode === "erase"){
        this.style.backgroundColor = "white";
    }
}

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
