var spacingX;
var spacingY;

var llength;
var sweight;

var BLOCKX;
var BLOCKY;

var tempX;
var tempY;

var value;
var oldvalue;
var RUNTHIS;

function setup() {
  createCanvas(500, 500);
  //noLoop();
  
   spacingX = 10;
 spacingY = 10;

 llength = 10;
 sweight = 3;

 BLOCKX = 500 / spacingX;
 BLOCKY = 500 / spacingY;


 value = 0;
 oldvalue = 0;
 RUNTHIS = true;
}

function draw() {  
  if (RUNTHIS == true){
  // setup chess board
  noStroke();
  for ( i = 0; i < spacingX; i ++) {
    for ( j = 0; j < spacingY; j ++) {
      if ((i + j + 1) % 2 == 0) {
        fill(154, 154, 154); // white
      } else {
        fill(100, 100, 100); // black
      }
      rect(i * BLOCKX, j * BLOCKY, (i + 1) * BLOCKX, (j + 1) * BLOCKY);
    }
  } 
  }
RUNTHIS = false;

}

function keyTyped() {
  if (key == "b") {
    value = 0;
    oldvalue = 0;    
  } else if (key == "w") {
    value = 255;
    oldvalue = 255;      
  } else if (key === 'q') {
saveCanvas('myCanvas', 'png');
}}

function mousePressed(){
    // setup interaction with intersection
   tempX = round((float(mouseX) / BLOCKX))*BLOCKX;
   tempY = round(float(mouseY) / BLOCKY)*(BLOCKY);
  //fill(255, 0, 0);
  //ellipse(tempX, tempY, 10, 10);
  stroke(value);
  strokeWeight(sweight);
  line(tempX-llength, tempY, tempX+llength, tempY);
  line(tempX, tempY-llength, tempX, tempY+llength);
}