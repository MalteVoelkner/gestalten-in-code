function setup() {
   var canvas = createCanvas(500, 500);
       canvas.parent('sketch');
  background(255);
  
  for(var x = random(500); x > 0.1; x /= 1.1) {
    line(0, x, 500, x);
    line(x, 500, x, 0);
  }
}

function draw() {
}
