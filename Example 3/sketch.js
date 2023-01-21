function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(0);
    push();
    noStroke();
    fill(255, 249, 107);
    arc(200, 200, 350, 350, -3 * QUARTER_PI, 3 * QUARTER_PI); //
    pop();
    push();
    noStroke();
    fill(216, 79, 57);
    arc(600, 175, 325, 325, PI, 0);
    rect(437.5, 175, 325, 187.5);
    pop();
    push();
    noStroke();
    fill(255);
    ellipse(525, 160, 85, 85);
    ellipse(672.5, 160, 85, 85);
    fill(6, 67, 238);
    ellipse(525, 160, 60, 60);
    ellipse(672.5, 160, 60, 60);
    pop();
}
