function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x = 50; x < width - 50; x += 50) {
    for (let y = 50; y < height - 50; y += 50) {
      line(x - 5, y - 5, x + 5, y + 5);
      line(x + 5, y - 5, x - 5, y + 5);
    }
  }
}

function draw() {}
