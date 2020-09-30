var canvas = document.getElementById('canvas');
var heightRatio = 2;
canvas.height = canvas.width * heightRatio;
canvas.width *= heightRatio;

var ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.strokeStyle = "white";

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = canvas.height/2;

ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
ctx.lineWidth = 0.5;
ctx.stroke();
            
let rY, rX, distance, squareCount = 0; circleCount = 0, resultString = "";

setInterval(Draw, 0);

function Draw()
{
    rY = Math.random(0) * canvas.height;
    rX = Math.random(0) * canvas.width;

    distance = Math.sqrt((rX - centerX) ** 2 + (rY - centerY) ** 2);
    if (distance < radius) {
        circleCount++;
        ctx.fillStyle = "hsl(" + rX + ", 100%, 50%)";
    } else {
        squareCount++;
        ctx.fillStyle = "white";
    }
    ctx.fillRect(rX, rY, 1, 1);

    resultString = "<p>Dot count: " + (squareCount + circleCount) + "<p>" + "<p>Circle count: " + circleCount + "<p>" +
    "<p>Square count: " + squareCount + "<p>" + "<p>Pi calculated: " + 4 * (circleCount / (squareCount) + "</p>";

    document.getElementById("result").innerHTML = resultString;
}

function on() {
    document.getElementById("overlay").style.display = "flex";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
