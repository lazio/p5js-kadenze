let circleX = 450;
let circleY = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  ellipse(circleX, circleY, 100, 100);

  if (keyIsPressed) {
    if (keyCode == UP_ARROW) {
      circleY -= 5;
    } else if (keyCode == DOWN_ARROW) {
      circleY += 5;
    } else if (keyCode == LEFT_ARROW) {
      circleX -= 5;
    } else if (keyCode == RIGHT_ARROW) {
      circleX += 5;
    }
  }
}
