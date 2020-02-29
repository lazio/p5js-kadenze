function setup() {
  createCanvas(windowWidth, windowHeight);

  var circleSize = 5;
  var dropShift = 2;

  fill(100);
  stroke(100);
  for (var x = 50; x <= width; x += 50) {
    for (var y = 50; y <= height; y += 50) {
      for (var z = 0; z <= 10; z += 1) {
        var dotX = (x * z) / 1.2;
        var dotY = (y * z) / 3;

        ellipse(dotX, dotY, circleSize, circleSize);
        triangle(
          dotX - dropShift,
          dotY,
          dotX + dropShift,
          dotY,
          dotX,
          dotY + dropShift + random(2, 4)
        );
      }
    }
  }
}

function draw() {}
