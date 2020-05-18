function Color() {
    const color = document.getElementById("colorPicker").value;  //Initializing user input to colour
    this.style.background = color;
}

// This is used to attach an eventListenersss
form.addEventListener('submit', makeGrid);

/* When size is submitted by the user, call makeGrid() to clear the grid
 We need to prevent the default behaviour so that the whole page does not
 get reset.*/
function makeGrid() {

    event.preventDefault();//Initializing to default
    
    const height = document.getElementById("heightInput").value;  //Initializing user input to height
    const width = document.getElementById("widthInput").value;  //Initializing user input to width
    const canvas = document.getElementById("pixel_canvas"); //Initializing base to base
    canvas.innerText=""; //empty default table

    for (let h=0; h<height; ++h) {
        const row = canvas.insertRow(0); //adding new column
        for (let w=0; w<width; ++w) {
            const cell = row.insertCell(0); 
            cell.onclick = Color;  //Colouring squares on clicking
        }
    }
}
