function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();

  for (let i = 50; i < width; i += 50) {
    for (let j = 50; j < height; j += 50) {
      ellipse(i, j, 60, 60);
    }
  }
}

function draw() {}
