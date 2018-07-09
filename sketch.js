function setup() {
  createCanvas(600,400);
}

function draw() {
  background('green');

  fill("orange");
  rect(450,200);

  fill("yellow");
  ellipse(mouseX,mouseY,80,80);

  fill("orange");
  textSize(40);
  text("put the yellow ball in the box! -->",50,200);
}
