function setup() {
  createCanvas(900,400);
}

function draw() {
  background('green');

  fill("orange");
  rect(450,175,80,80);

  fill("yellow");
  ellipse(mouseX,mouseY,80,80);

  fill("white");
  textSize(35);
  text("input! -->",50,200);
}
