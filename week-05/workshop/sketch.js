let PosX, PosY;
let VelX, VelY;
let radius;
let cColor;
let bColor;

function setup() {
  createCanvas(800, 600);

  PosX = width / 2;
  PosY = height / 2;

  VelX = 3;
  VelY = 1.7;
  radius = 50;
  cColor = changeColor();
  bColor = changeColor();
}

function draw() {
  background(bColor, 20);

  fill(cColor);
  circle(PosX, PosY, radius * 2);

  if (PosX - radius <= 0 || PosX + radius >= width) {
    VelX *= -1;
    cColor = changeColor();
    bColor = changeColor();
  }

  if (PosY - radius <= 0 || PosY + radius >= height) {
    VelY *= -1;
    cColor = changeColor();
    bColor = changeColor();
  }

  PosX = PosX + VelX;
  PosY = PosY + VelY;
}

function changeColor() {
  return color(random(255), random(255), random(255));
}
