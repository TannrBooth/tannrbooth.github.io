function calculateCircle() {
    radius = document.getElementById("radius").value;
    document.getElementById("circumference").innerHTML = 2 * Math.PI * radius;
    document.getElementById("area").innerHTML = Math.PI * Math.pow(radius,2);
    document.getElementById("volume").innerHTML = 4/3 * Math.PI * Math.pow(radius,3); 
}