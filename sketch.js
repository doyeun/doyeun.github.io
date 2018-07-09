function setup() {
  createCanvas(900,400);
}

function draw() {
  background('green');

  fill("orange");
  noStroke();
  rect(300,150,80,80);

  fill("yellow");
  ellipse(mouseX,mouseY,80,80);
  fill("orange");
  ellipse(mouseX,mouseY,20,20);

  fill("white");
  textSize(35);
  text("input!",50,200);
}
