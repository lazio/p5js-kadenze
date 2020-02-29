function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noFill();

  for (let i = 50; i < width; i += 50) {
    for (let j = 50; j < height; j += 50) {
      ellipse(i, j, random(20, 120), random(20, 120));
    }
  }
}

function draw() {}
