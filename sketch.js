var intro;

var canvas;

function setup() {
  intro = new Intro();
  canvas = createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  intro.introScreen();
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
}

function mousePressed() {
  intro.end();
}
