function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let x = 50; x < width - 50; x += 50) {
    for (let y = 50; y < height - 50; y += 50) {
      line(x, y, width / 2, height / 2);
    }
  }
}

function draw() {}
