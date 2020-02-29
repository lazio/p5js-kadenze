function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < width; i++) {
    stroke((i / width) * 255, (i / width) * 100, (i / width) * 90);
    line(i, 0, i, height);
  }
}

function draw() {}
