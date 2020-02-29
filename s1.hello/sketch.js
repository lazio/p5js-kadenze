function setup() {
  createCanvas(windowWidth, windowHeight);
  background(55, 0, 150);
  drawBasicObjectsWithColors();
}

function draw() {}

function drawBasicObjects() {
  ellipse(50, 50, 100, 100);
  rect(10, 10, 90, 90);
  rect(20, 20, 70, 70);
  line(0, 0, 500, 500);
  strokeWeight(10);
  line(0, 500, 500, 0);
}

function drawBasicObjectsWithColors() {
  strokeWeight(10);
  fill(200, 200, 0);
  rect(100, 100, 90, 90);

  fill(200, 0, 200, 100);
  rect(150, 150, 90, 90);
}
