let isBlack = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (isBlack) {
    background(0);
  } else {
    background(255, 0, 0);
  }
}

function mousePressed() {
  isBlack = !isBlack;
}
