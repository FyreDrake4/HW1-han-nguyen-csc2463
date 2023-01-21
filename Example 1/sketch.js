function setup() {
    createCanvas(800, 400);
    colorMode(HSB);
}

function draw() {
    background(109, 100, 90);
    push();
    fill(100, 0, 100);
    ellipse(200, 200, 350, 350);
    square(420, 25, 350);
}
