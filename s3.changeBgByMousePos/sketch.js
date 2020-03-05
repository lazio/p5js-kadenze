function setup() {
  createCanvas(windowWidth, windowHeight);
  //   strokeWeight(4);
  noStroke();
}

function draw() {
  var grey = map(mouseX, 0, width, 0, 255);
  background(102);
  fill(grey);
  ellipse(mouseX, mouseY, 30, 30);
}
