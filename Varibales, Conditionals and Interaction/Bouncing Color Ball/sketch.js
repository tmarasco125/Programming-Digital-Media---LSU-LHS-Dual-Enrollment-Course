/* PDM Course: Web Graphics Unit

Into to Variables: Basic Motion and a Conditional!

Code by Anthony T. Marasco, based on excercise by
Daniel Shiffman -2016
*/

// position of the ball
var x = 20;
// how far the ball moves every time
var speed = 5;

function setup() {
  createCanvas(400, 400);
  background(202, 255, 97);
}

function draw() {
 background(202, 255, 97);//if we don't want a "trail" leftover from the ball, we need to redraw backround!
    if (x > 375){
        fill(18, 227, 220);
    }
    if (x < 25){
        fill(255, 0, 242);
    }
    
    ellipse(x, 200, 50, 50);
    
    if (x > 375) {
        speed = -5;
    }
    if (x < 25) {
        speed = 5;
    }

    // move the ball
    x = x + speed;
}
 