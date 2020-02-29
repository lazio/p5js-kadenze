function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < width; i += 50) {
    for (let j = 0; j < height; j += 50) {
      ellipse(i, j, random(1, 20), random(1, 20));
    }
  }
}

function draw() {}
