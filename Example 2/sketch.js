function setup() {
    createCanvas(400, 400);
    colorMode(RGB);
    blendMode(BLEND);
}

function draw() {
    // push();
    clear();
    noStroke();
    fill(255, 0, 0, 100);
    ellipse(200, 70, 100, 100); //Red Circle
    fill(0, 255, 0, 100);
    ellipse(230, 120, 100, 100); //Green Circle
    fill(0, 0, 255, 100);
    ellipse(170, 120, 100, 100); //Blue Circle
    // pop();
}
