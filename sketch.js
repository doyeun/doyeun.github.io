function setup() {
  createCanvas(900,400);
}

function draw() {
  background(0,0,128);

  fill("orange");
  noStroke();
  rect(300,150,80,80);

  fill("yellow");
  ellipse(mouseX,mouseY,80,80);
  fill(0,0,128);
  ellipse(mouseX,mouseY,30,30);

  noFill();
  stroke("orange");
  rect(250,100,210,150);

  fill("yellow");
  noStroke();
  textSize(35);
  text("play!",100,200);
}
