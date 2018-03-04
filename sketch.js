var canvas;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);
  fill(255);
  textAlign(CENTER);
  textSize(width*0.05);
  text("Welcome to dylanneve1.github.io", width/2, height/4);
  textSize(width*0.02);
  text("This site is coded with p5.js", width/2, (height/4)*2);
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
}
