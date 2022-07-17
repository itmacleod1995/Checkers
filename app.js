let redPeice = document.getElementsByClassName("red-3");
let temp = undefined;
let pieceNum = undefined;

let turn = 1;
let currentPlayer = document.getElementById("player");

document.onclick = (e) => {
    if (e.target.className == "red-piece" || e.target.className == "black-piece") {
        e.target.style.cssText = "border: 4px solid yellow;";
        temp = e.target;
        pieceNum = parseInt(temp.offsetParent.id);
    } else if (e.target.className == "first-cell" || e.target.className == "second-cell" || e.target.className == "third-cell" ||
        e.target.className == "fourth-cell" || e.target.className == "fifth-cell" || e.target.className == "sixth-cell" || e.target.className == "seventh-cell"
        || e.target.className == "eigth-cell") {
        let val = parseInt(e.target.id);
        if (turn % 2 != 0) {
            if (pieceNum - 7 == val || pieceNum - 9 == val) {
                e.target.appendChild(temp);
                temp.style.cssText = "border: none";
                if (turn % 2 != 0) {
                    currentPlayer.classList.remove("red");
                    currentPlayer.classList.add("black");
                    turn++;
                    document.getElementById("currentTurn").textContent = "Current turn: ";
                    document.getElementById("currentTurn").appendChild(currentPlayer);
                } else {
                    currentPlayer.classList.remove("black");
                    currentPlayer.classList.add("red");
                    turn++;
                    document.getElementById("currentTurn").textContent = "Current turn: ";
                    document.getElementById("currentTurn").appendChild(currentPlayer);
                }
            }
        } else {
            if (pieceNum + 7 == val || pieceNum + 9 == val) {
                e.target.appendChild(temp);
                temp.style.cssText = "border: none";
                if (turn % 2 != 0) {
                    currentPlayer.classList.remove("red");
                    currentPlayer.classList.add("black");
                    turn++;
                    document.getElementById("currentTurn").textContent = "Current turn: ";
                    document.getElementById("currentTurn").appendChild(currentPlayer);
                } else {
                    currentPlayer.classList.remove("black");
                    currentPlayer.classList.add("red");
                    turn++;
                    document.getElementById("currentTurn").textContent = "Current turn: ";
                    document.getElementById("currentTurn").appendChild(currentPlayer);
                }
            }
        }


    }
}
