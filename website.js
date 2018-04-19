var bug;  // Declare object

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // Create object
  bug = new Jitter();
}

function draw() {
  background(50, 89, 100);
  bug.move();
  bug.display();
}

// Jitter class
function Jitter() {
  this.x = window.innerWidth/2;
  this.y = window.innerHeight/2;
  this.diameter = window.innerWidth/2;
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}