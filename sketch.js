var canvas;
var drops = [];

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(51);
  fill(255);
  // ellipse(width/2,height/2,100,100);
  textAlign(CENTER);
  textSize(30);
  text("Welcome to dylanneve1.github.io", width/2, height/4);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};
