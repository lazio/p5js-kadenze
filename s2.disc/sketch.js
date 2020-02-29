function setup() {
  createCanvas(windowWidth, windowHeight);

  noFill();
  for (let i = 50; i < 600; i += 5) {
    ellipse(width / 2, height / 2, i, i);
  }
}

function draw() {}
