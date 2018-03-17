var requestID;
var canvas;
var ctx;
var positionX=0
window.onload = init;
function init() {
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 500, 500);
    ctx.fillStyle = "green";
    startAnimation();
}
function startAnimation() {
    requestID = requestAnimationFrame(animationLoop);
}
function animationLoop(timeStamp) {



    requestID = requestAnimationFrame(animationLoop);
}