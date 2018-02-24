var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
    // Background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1063, 709);
    // Rings
    blue();
    black();
    red();
    yellow();
    green();
}
function blue() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(275, 295, 115, 0, 2 * Math.PI);
    ctx.strokeStyle="#2F85C2"
    ctx.stroke();
}
function black() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(531, 295, 115, 0, 2 * Math.PI);
    ctx.strokeStyle="black"
    ctx.stroke();
}
function red() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(789, 295, 115, 0, 2 * Math.PI);
    ctx.strokeStyle="#ED3A4E"
    ctx.stroke();
}
function yellow() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(403, 413, 115, 0, 2 * Math.PI);
    ctx.strokeStyle="#F6B143"
    ctx.stroke();
}
function green() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(661, 413, 115, 0, 2 * Math.PI);
    ctx.strokeStyle="#3E8B3D"
    ctx.stroke();
}