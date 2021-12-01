function setup() {
  canvas = createCanvas(450,450);
  background('lightblue');
  canvas.parent('processing');
  //noLoop();
}

function TekenKerk(hoogte) {
  noStroke();
  fill('red');
  rect(0,350,75,hoogte);
  fill('grey');
  triangle(0,350,75,350,37,310);
}


function draw() {
  noStroke();
  TekenKerk(300);
  translate(100,-100);
  TekenKerk(275);
  translate(100,-100);
  TekenKerk(350);
}