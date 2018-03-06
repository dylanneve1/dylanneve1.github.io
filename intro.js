function Intro() {

  var clicks = 0;

  var originalTitleY = -100;

  var notYetStopped = true;

  var clickerRed = 213;
  var clickerGreen = 0;
  var clickerBlue = 0;

  var introScreenShow = true;

  this.introScreen = function() {
  if(introScreenShow == true) {
      background(0);
      fill(255);
      clicks += 100000000000000000000;
      textAlign(CENTER);
      stroke(213,0,0);
      strokeWeight(20);
      textSize(width*0.05);
      if(originalTitleY < height/4) {
        originalTitleY += 5;
      } else {
        notYetStopped = false;
      }
      text("Welcome to dylanneve1.github.io", width/2, (height/4)*1);
      textSize(width*0.02);
      text("<p> This site is coded with p5.js, click to ENTER. </p>", width/2, (height/4)*2);
      stroke(clickerRed, clickerGreen, clickerBlue);
      fill(0, 255, 0);
    }
  }

  this.end = function() {
    introScreenShow = false;
    background(255);
  }
}
