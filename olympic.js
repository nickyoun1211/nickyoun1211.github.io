var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
    // Background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1063, 709);
    // Rings
    // blue();
    // black();
    // red();
    // yellow();
    // green();
    blueYellow1();
    yellowblue1();
    yellowblue2();
    blueYellow2();
    blackyellow1();
    yellowblack1();
    yellowblack2();
    blackyellow2();
    blackgreen1();
    greenblack1();
    greenblack2();
    blackgreen2();
    redgreen1();
    greenred1();
    redgreen2();
    greenred2();
}
function blue() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(275, 295, 115, 0, 2 * Math.PI);
    ctx.strokeStyle="#2F85C2"
    ctx.stroke();
}
function blueYellow1() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(275, 295, 115,Math.PI/4 , 5 * Math.PI/4);
    ctx.strokeStyle="#2F85C2"
    ctx.stroke();
}
    
function blueYellow2() {
        ctx.beginPath();
        ctx.lineWidth = 20;
        ctx.arc(275, 295, 115,5*Math.PI/4 , Math.PI/4);
        ctx.strokeStyle="#2F85C2"
        ctx.stroke();
}
function yellowblue1() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(403, 413, 115,Math.PI/4 , 5 * Math.PI/4) ;
    ctx.strokeStyle="#F6B143"
    ctx.stroke();
}
function yellowblue2() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(403, 413, 115, 5 * Math.PI/4, 3*Math.PI/2) ;
    ctx.strokeStyle="#F6B143"
    ctx.stroke();
}
function blackyellow1() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(531, 295, 115, 3*Math.PI/4, 7*Math.PI/4);
    ctx.strokeStyle="black"
    ctx.stroke();
}
function yellowblack1() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(403, 413, 115, 3 * Math.PI/2,7*Math.PI/4);
    ctx.strokeStyle="#F6B143"
    ctx.stroke();
}
function yellowblack2() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(403, 413, 115, 7 * Math.PI/4,Math.PI/4);
    ctx.strokeStyle="#F6B143"
    ctx.stroke();
}
function blackyellow2() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(531, 295, 115, Math.PI/2, 3*Math.PI/4);
    ctx.strokeStyle="black"
    ctx.stroke();
}
function blackgreen1() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(531, 295, 115, Math.PI/4,Math.PI/2);
    ctx.strokeStyle="black"
    ctx.stroke();
}
function greenblack1() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(661, 413, 115,Math.PI/4 , 5*Math.PI/4);
    ctx.strokeStyle="#3E8B3D"
    ctx.stroke();
}
function greenblack2() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(661,413,115,5* Math.PI/4,3*Math.PI/2);
    ctx.strokeStyle="3E8B3D"
    ctx.stroke();
}
function blackgreen2() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(531, 295, 115, 7*Math.PI/4,Math.PI/4);
    ctx.strokeStyle="black"
    ctx.stroke();
}
function redgreen1() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(789, 295, 115, 3*Math.PI/4, 7*Math.PI/4);
    ctx.strokeStyle="#ED3A4E"
    ctx.stroke();
}function redgreen2() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(789, 295, 115,7*Math.PI/4, 3*Math.PI/4);
    ctx.strokeStyle="#ED3A4E"
    ctx.stroke();
}
function green() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(661, 413, 115, 0, 2 * Math.PI);
    ctx.strokeStyle="#3E8B3D"
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
function greenred1() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(661, 413, 115, 7 * Math.PI/4,Math.PI/4);
    ctx.strokeStyle="#3E8B3D"
    ctx.stroke();
}
function greenred2() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(661, 413, 115, 3 * Math.PI/2,7*Math.PI/4);
    ctx.strokeStyle="#3E8B3D"
    ctx.stroke();
}