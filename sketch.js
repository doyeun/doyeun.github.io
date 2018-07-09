function setup() {
  createCanvas(900,400);
}

function draw() {
  background('green');

  noFill();
  stroke("orange")
  rect(250,100,210,150)

  fill("orange");
  noStroke();
  rect(300,150,80,80);

  fill("yellow");
  ellipse(mouseX,mouseY,80,80);
  noFill();
  ellipse(mouseX,mouseY,30,30);

  fill("yellow");
  textSize(35);
  text("input!",100,200);
}
