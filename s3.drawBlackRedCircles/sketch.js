function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(4);
}

function draw() {
  if (mouseX < 300) {
    stroke("red");
  } else {
    stroke("black");
  }

  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 30, 30);
  }
}
