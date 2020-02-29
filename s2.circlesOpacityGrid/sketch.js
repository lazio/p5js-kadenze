function setup() {
  createCanvas(windowWidth, windowHeight);

  let count = 0;
  for (let i = 50; i < width; i += 50) {
    for (let j = 50; j < height; j += 50) {
      stroke(count);
      ellipse(i, j, 20, 20);
      count++;
    }
  }
}

function draw() {}
