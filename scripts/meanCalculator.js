let numArr = [];
let value;
let valueIndex;

function refreshPage() {
    let arrString = '';
    for (num of numArr){
        arrString += num + " ";
    }
    document.getElementById("dataset").innerHTML = arrString;

    let currMean = 0;
    for (num of numArr) {
        currMean += num;
    }
    currMean = currMean/numArr.length;

    document.getElementById("mean").innerHTML = currMean;
}

function addValue() {
    value = parseFloat(document.getElementById("entry").value);
    if (!value) {
        alert("Must enter a number");
    }
    else {
        numArr.push(value);
        refreshPage();
    }
    document.getElementById("entry").value = "";
}

function removeValue(){
    value = parseFloat(document.getElementById("entry").value);
    if (!value) {
        alert("Must enter a number")
    }
    else {
        valueIndex = numArr.indexOf(value);
        if (valueIndex == -1) {
            alert("Value is not in array");
        }
        else {
            numArr.splice(valueIndex,1);
            refreshPage();
        }
    }
    document.getElementById("entry").value = "";
}