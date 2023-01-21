function setup() {
    createCanvas(800, 400);
    colorMode(HSB);
}

function draw() {
    background(109, 100, 90); //background color
    push();
    fill(100, 0, 100); //Fill with White
    ellipse(200, 200, 350, 350); //Circle
    square(420, 25, 350); //Square
}
