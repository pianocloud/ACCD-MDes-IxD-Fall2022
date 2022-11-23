let nOffsetX = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255);

  for (let x = 0; x <= width; x++) {
    line(x, 0, x, random(height / 2));
  }

  for (let x = 0; x <= width; x++) {
    let y = map(noise(x * 0.005 + nOffsetX), 0, 1, height / 2, height);
    line(x, height, x, y);
  }

  nOffsetX += 0.005;
}
