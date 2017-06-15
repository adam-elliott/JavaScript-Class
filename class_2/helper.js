
function echo(arg) {
    let printArea = document.getElementById("main");
    let p = document.createElement("p");
    p.textContent = arg;
    printArea.appendChild(p);
} 
