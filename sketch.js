var canvas;
var clicks = 0;

var originalTitleY = -100;
var notYetStopped = true;

var clickerRed = 213;
var clickerGreen = 0;
var clickerBlue = 0;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {

  if(notYetStopped == true) {
    background(0);
  } else if (notYetStopped == false) {
    background(62,39,35);
  }

  //background(0);
  fill(255);
  textAlign(CENTER);
  stroke(213,0,0);
  strokeWeight(20);
  textSize(width*0.05);
  if(originalTitleY < height/4) {
    originalTitleY += 5;
  } else {
    notYetStopped = false;
  }
  text("Welcome to dylanneve1.github.io", width/2, originalTitleY);
  textSize(width*0.02);
  text("<p> This site is coded with p5.js, click to ENTER. </p>", width/2, (height/4)*2);
  stroke(clickerRed, clickerGreen, clickerBlue);
  text("You have clicked " + clicks + " times.", width/2, (height/4)*3);
  fill(0, 255, 0);
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
  clickerRed = random(0, 150);
  clickerGreen = random(0, 150);
  clickerBlue = random(0, 150);
}
