function Choose() {

  this.chooseScreen = function() {
    if(showChooseScreen == true) {
      noStroke();
      strokeWeight(5);
      background(13,71,161);
      fill(255);
      text("Where do you want to go?", width/2, height/4);
      text("Nowhere for now lol", width/2, height/2);
    }
  }

  this.end = function() {
    if(selected == true) {
      showChooseScreen = false;
    }
  }
}
