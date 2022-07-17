let redPeice = document.getElementsByClassName("red-3");
let temp = undefined;

document.onclick = (e) => {
    if (e.target.className == "red-piece" || e.target.className == "black-piece") {
        e.target.style.cssText = "border: 4px solid yellow;";
        temp = e.target;
    } else if (e.target.className == "first-cell" || e.target.className == "second-cell" || e.target.className == "third-cell" ||
        e.target.className == "fourth-cell" || e.target.className == "fifth-cell" || e.target.className == "sixth-cell" || e.target.className == "seventh-cell"
        || e.target.className == "eigth-cell") {
        e.target.appendChild(temp);
        temp.style.cssText = "border: none";
    }

}