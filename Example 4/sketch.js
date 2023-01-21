function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0, 0, 124);
    push();
    stroke(255, 255, 255);
    strokeWeight(4);
    fill(52, 126, 25);
    ellipse(200, 200, 200, 200);
    pop();
    push();
    stroke(255, 255, 255);
    strokeWeight(4);
    fill(237, 49, 19);
    star(200, 200, 100, 40, 5);
    pop();
}

function star(x, y, radius1, radius2, npoints) {
    //I found this from the p5js Website to draw a star of n points
    //but modified it so that it shows in the correct rotation for every n like 5
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    let doublepts = (PI / 2) * npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a + doublepts) * radius2;
        let sy = y + sin(a + doublepts) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle + doublepts) * radius1;
        sy = y + sin(a + halfAngle + doublepts) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}
