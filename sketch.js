var menus;

var canvas;

function setup() {
  menus = new Menus();
  canvas = createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  menus.introScreen();
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
}

function mousePressed() {
  menus.update();
}
