function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // teken de grond
  noStroke();
  fill('wheat');
  rect(0,350,450,100);
  // teken het huis
  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(100,280,100,100);
  fill('gray');
  triangle(200,280,150,200,100,280)  
  // teken de deur
  noStroke();
  // PAS ONDERSTAANDE REGEL AAN zodat de deur op de juiste plaats staat
  rect(120,330,30,50);
  // teken de maan
  
  fill('khaki');
 ellipse(355,100,150)
  // teken de boom
  fill('sienna');
  rect(300,250,40,130);
  fill('olive');
  ellipse(320,220,90,130)
  // VERVANG DEZE REGEL door een regel die het groen van de boom tekent met behulp van ellipse
  // Als je een cirkel wilt tekenen met diameter 300 kun je ellipse(0,0,300) gebruiken.
  // Als je een ellipse wilt maken met breedte 300 en hoogte 500, dan moet je een parameter toevoegen: ellipse(0,0,300,500).
}
