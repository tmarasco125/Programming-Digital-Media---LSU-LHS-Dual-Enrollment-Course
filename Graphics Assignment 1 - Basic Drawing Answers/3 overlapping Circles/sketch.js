/* PDM Course: Web Graphics Unit, Benchmark Assignment 1:
Basic Drawing in P5.js

Image 1 Answer: RGB overlapping circles (transparent)
Code by Anthony T. Marasco -2016
*/

function setup() {
  createCanvas(700, 700);
  background(255);
}

function draw() {
  
  noStroke();
  fill(255, 102, 102, 150);//red circle
  ellipse(width/2-50, height/2-75, 250, 250);
  noStroke();
  fill(121, 121, 235, 150);//blue circle
  ellipse(width/2-150, height/2+50, 250, 250);
  fill(102, 255, 102, 150);//green circle
  ellipse(width/2+50, height/2+50, 250, 250);
  
}