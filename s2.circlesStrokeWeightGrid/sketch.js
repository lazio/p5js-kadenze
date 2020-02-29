function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noFill();

  let count = 0;
  for (let i = 50; i < width; i += 50) {
    for (let j = 50; j < height; j += 50) {
      strokeWeight(count * 0.1);
      ellipse(i, j, 20, 20);
      count++;
    }
  }
}

function draw() {}
