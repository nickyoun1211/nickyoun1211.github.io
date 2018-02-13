var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.moveTo(60.3,323.3);
    ctx.lineTo(136.3,335.8);
    ctx.lineTo(136.3,363.2);
    ctx.lineTo(60.3,347.1);
    ctx.lineTo(60.3,323.3);
    ctx.lineTo(80.7,319.6);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(136.3,335.8);
    ctx.lineTo(174.8,323.8);
    ctx.lineTo(174.5,347.4);
    ctx.lineTo(136.3,363.2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(174.8,323.8);
    ctx.lineTo(158.5,322.2);
    ctx.stroke();
}