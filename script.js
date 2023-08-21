function createGrid(x){
    for(let rows = 0; rows > x; rows++){
        for(let columns = 0; columns > x; columns++){
            document.getElementsById("#container").append("<div class='grid'></div>");
        };
    };

    document.getElementsByClassName("grid").width(960/x);
    document.getElementsByClassName("grid").height(960/x);
}

createGrid(30);
