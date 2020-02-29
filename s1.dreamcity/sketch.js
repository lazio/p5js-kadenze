function setup() {
  createCanvas(1024, 768);
  background(29, 25, 13);

  noStroke();

  fill(101, 144, 110);
  quad(0, 0, 235, 0, 218, 116, 0, 105);

  fill(67, 73, 47);
  quad(34, 233, 317, 72, 341, 114, 35, 267);

  fill(78, 94, 63);
  quad(35, 267, 341, 114, 350, 148, 37, 313);

  fill(85, 102, 83);
  quad(37, 313, 350, 148, 367, 183, 40, 410);

  fill("#539573");
  quad(0, 420, 367, 183, 450, 359, 0, 607);

  fill(103, 143, 118);
  quad(0, 105, 30, 110, 50, 476, 0, 497);

  fill("#8c8265");
  beginShape();
  vertex(0, 497);
  vertex(327, 289);
  vertex(373, 398);
  vertex(57, 588);
  vertex(0, 607);
  endShape();

  fill("#c9cda8");
  beginShape();
  vertex(0, 607);
  vertex(57, 588);
  vertex(373, 398);
  vertex(458, 339);
  vertex(611, 261);
  // vertex(760, 576);
  vertex(1024, 540);
  vertex(1024, 768);
  vertex(0, 768);
  endShape();

  fill("#b4b491");
  beginShape();
  vertex(0, 655);
  vertex(23, 647);
  vertex(235, 710);
  vertex(276, 768);
  vertex(0, 768);
  endShape();

  fill("#9e8f6e");
  ellipse(520, 601, 320);

  fill("#699d76");
  quad(497, 438, 566, 453, 564, 759, 489, 758);

  fill("#72846a");
  triangle(544, 768, 1024, 725, 1024, 768);

  fill("#63856f");
  triangle(460, 0, 1024, 0, 1024, 77);

  fill("#bda58d");
  triangle(460, 0, 716, 0, 672, 29);

  fill("#2e3825");
  quad(548, 79, 1024, 120, 1024, 200, 564, 107);

  fill("#4c7459");
  beginShape();
  vertex(564, 107);
  vertex(1024, 200);
  vertex(1024, 232);
  vertex(864, 210);
  vertex(584, 156);
  endShape();

  fill("#638b69");
  beginShape();
  vertex(584, 156);
  vertex(864, 210);
  vertex(1024, 232);
  vertex(1024, 320);
  vertex(611, 261);
  endShape();

  fill("#8b9177");
  quad(611, 261, 1024, 320, 1024, 540, 760, 576);

  fill("#42503f");
  quad(1006, 0, 1024, 0, 1024, 120, 1006, 120);

  fill("#0e0600");
  quad(1006, 121, 1024, 121, 1024, 157, 1000, 151);

  fill("#86a18f");
  beginShape();
  vertex(1024, 540);
  vertex(933, 613);
  vertex(922, 676);
  vertex(865, 740);
  vertex(1024, 725);
  endShape();
}

function draw() {}
