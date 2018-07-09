function setup() {
  createCanvas(900,400);
}

function draw() {
  background('green');

  fill("orange");
  rect(450,200,80,80);

  fill("yellow");
  ellipse(mouseX,mouseY,80,80);

  fill("white");
  textSize(35);
  text("put the yellow ball in the box! -->",50,200);
}
