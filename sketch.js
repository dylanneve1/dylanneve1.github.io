var intro;
var choose;

var showChooseScreen = false;
var introScreenShow = true;

var canvas;

function setup() {
  intro = new Intro();
  choose = new Choose();
  canvas = createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  intro.introScreen();
  choose.chooseScreen();
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
