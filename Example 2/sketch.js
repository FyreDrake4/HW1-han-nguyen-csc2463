function setup() {
    createCanvas(400, 400);
    colorMode(RGB);
    blendMode(BLEND);
}

function draw() {
    push();
    noStroke();
    fill(244, 173, 171, 100);
    ellipse(200, 70, 100, 100); //Red Circle
    pop();
    push();
    noStroke();
    fill(169, 168, 251, 100);
    ellipse(170, 120, 100, 100); //Blue Circle
    pop();
    push();
    noStroke();
    fill(187, 254, 175, 100);
    ellipse(230, 120, 100, 100); //Green Circle
    pop();
}
