var yPositie = 200
function setup() {
  canvas = createCanvas(600,300);
  canvas.parent('processing');
  //noLoop();
}

function draw(){ 
  noStroke();
  background('cyan');
    if (mouseY > 200) {
    fill('orange')
  }
  else 
  { 
    fill('yellow');
  }

  ellipse(width/2,yPositie,200)
  fill('brown');
  rect(0,200,600);

  translate(40,100)

  for (var n = 0;n < 4;n++) {
  tekenHuis();
  translate(100,0);
  }
  

}
function tekenHuis(){
  push();
  fill('red');
  triangle(40,0,0,50,80,50);
  fill('gray');
  rect(0,50,80,80);
  pop();

}