function setup() {
  createCanvas(600,400);
}

function draw() {
  background('green');

  fill("yellow");
  ellipse(mouseX,mouseY,40,40);

  fill("orange");
  textSize(40);
  text("hello", 50,200);
}
