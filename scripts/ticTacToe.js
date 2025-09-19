let xTurn = true;
let gameOver = false;

function changeMark(btn) {
    let currentMark = document.getElementById(btn).innerHTML;

    if (!currentMark) {
        if (xTurn) {
            document.getElementById(btn).style = "color: #dbc84b;"
            document.getElementById(btn).innerHTML = "X";
        }
        else {
            document.getElementById(btn).style = "color: #6402e3;"
            document.getElementById(btn).innerHTML = "O";
        }
        if (!gameOver) checkWin(xTurn);
        xTurn = !xTurn;
        setTurn();
        
    }
}

function setTurn() {
    if (xTurn) document.getElementById("turn").innerHTML = "X";
    
    else document.getElementById("turn").innerHTML = "O";
}

function resetBoard(){
    document.getElementById("a1").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c3").innerHTML = "";

    gameOver = false;
    document.getElementById("message_out").innerHTML = "";
    xTurn = true;
    setTurn();

    
}

function checkWin(xTurn) {
    console.log("checkWin running with " + xTurn + " as turn");
    a1 = document.getElementById("a1").innerHTML;
    a2 = document.getElementById("a2").innerHTML;
    a3 = document.getElementById("a3").innerHTML;
    b1 = document.getElementById("b1").innerHTML;
    b2 = document.getElementById("b2").innerHTML;
    b3 = document.getElementById("b3").innerHTML;
    c1 = document.getElementById("c1").innerHTML;
    c2 = document.getElementById("c2").innerHTML;
    c3 = document.getElementById("c3").innerHTML;


    const t = (xTurn) ? "X" : "O";
    console.log("t is set to " + t);
    let w = false;

    if (a1 == t && a2 == t && a3 == t) w = true;
    if (b1 == t && b2 == t && b3 == t) w = true;
    if (c1 == t && c2 == t && c3 == t) w = true;
    if (a1 == t && b1 == t && c1 == t) w = true;
    if (a2 == t && b2 == t && c2 == t) w = true;
    if (a3 == t && b3 == t && c3 == t) w = true;
    if (a1 == t && b2 == t && c3 == t) w = true;
    if (a3 == t && b2 == t && c1 == t) w = true;
    console.log("w is " + w);

    if (w) {
        document.getElementById("message_out").innerHTML += t + " wins!";
        gameOver = true;
    }
}