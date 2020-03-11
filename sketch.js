var a=30;
var c;
function setup() {
  createCanvas(windoWidth, windowHeight);
}

function draw() {
  colorMode(HSB,360,100,100);
 // background(0,20,80);
  fill(0,random(0,100),100);
  noStroke();
  c= a* random(1,5);
  ellipse(mouseX,mouseY,c,c);
 
  

}
