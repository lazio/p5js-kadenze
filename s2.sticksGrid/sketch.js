function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x = 50; x < width - 50; x += 50) {
    for (let y = 50; y < height - 50; y += 50) {
      for (let i = 0; i < 16; i += 4) {
        line(x + i, y, x + i, y + 12);
      }

      line(x, y, x + 12, y + 12);
    }
  }
}

function draw() {}
