let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, TWO_PI, 1, 1);

  particles.push(new Particle(width/2, height/2));
}

function draw() {
  background(0);

  particles.forEach((p) => {
    p.reachOut(particles)
    p.move();
    p.display();
  });
}

function mouseReleased() {
  particles.push(new Particle(mouseX, mouseY));
}
