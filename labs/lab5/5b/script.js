var canvas = document.getElementById("rectangle");
var context = canvas.getContext("2d");
context.fillStyle = "white";
//context.fillRect(0, 0, 200, 200);

var m = 20;
var x1 = 200;
var x2 = 400;
var x3 = 600;
context.moveTo(0 + m, x1);
context.lineTo(x3 - m, x1);
lineWidth = 5;
context.stroke();

context.moveTo(0 + m, x2);
context.lineTo(x3 - m, x2);
lineWidth = 5;
context.stroke();

context.moveTo(x1, 0 + m);
context.lineTo(x1, x3 - m);
lineWidth = 5;
context.stroke();

context.moveTo(x2, 0 + m);
context.lineTo(x2, x3 - m);
lineWidth = 5;
context.stroke();

context.moveTo(x1 + m, x1 + m);
context.lineTo(x2 - m, x2 - m);
lineWidth = 5;
context.stroke();

context.moveTo(x2 - m, x1 + m);
context.lineTo(x1 + m, x2 - m);
lineWidth = 5;
context.stroke();

var y1 = 100;
var y2 = 300;
var y3 = 500;
var angle = 2 * Math.PI;

context.moveTo(y1 + 80, y1);
context.arc(y1, y1, 80, 0, angle);
lineWidth = 15;
context.stroke();

context.moveTo(y3 + 80, y3);
context.arc(y3, y3, 80, 0, angle);
lineWidth = 15;
context.stroke();