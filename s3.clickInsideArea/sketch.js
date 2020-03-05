let bgcolor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgcolor);
  fill(255);
  noStroke();
  ellipse(width / 2, height / 2, 100, 100);

  let d = dist(width / 2, height / 2, mouseX, mouseY);

  if (d < 50 && mouseIsPressed) {
    bgcolor = 255;
  } else {
    bgcolor = 0;
  }
}
