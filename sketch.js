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
  fill("black");
  ellipse(mouseX,mouseY,20,20);

  fill("yellow");
  textSize(35);
  text("input!",50,200);
}
