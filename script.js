function change(){
   gridDiv.style.color = "red";
};

function setupGrid(size){
    const grid = document.getElementById("grid-container");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(let i = 0; i < size * size; i++){
        const gridDiv = document.createElement("div");
        grid.appendChild(gridDiv);
    }
  
}

function ColorMode(){
    grid = addEventListener(onmouseover, change);

}






window.onload = () => setupGrid(30  );