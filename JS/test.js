var visX = 0;
var visY = 0;
var x =0.5;

function setup(){ canvas = createCanvas(600,400);
  canvas.parent('processing');
  frameRate(30); 
  
}
  
  function draw() {
    background('lightblue');
    noStroke();
  fill('brown');
  rect(0,350,600,50);
 
  visX += 2;
  visY += 1;
  for (var n = 0;n < 3;n++) {
    tekenVis(visX,visY,n);
    translate(20,30);
  }

  
}
 function tekenVis(visX,visY,x){
 
  push();
  fill('orange');
  translate(visX,visY);
  triangle(60,80,60,110,100,95);
  ellipse(90,95,20*-x);
  pop();
 }
