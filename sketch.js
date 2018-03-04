var canvas;
var clicks = 0;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);
  fill(255);
  textAlign(CENTER);
  stroke(213,0,0);
  strokeWeight(20);
  textSize(width*0.05);
  text("Welcome to dylanneve1.github.io", width/2, height/4);
  textSize(width*0.02);
  text("<p> This site is coded with p5.js, click to ENTER. </p>", width/2, (height/4)*2);
  text("You have clicked " + clicks + " times.", width/2, (height/4)*3);
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
}

function mousePressed() {
  clicks += 1;
}
