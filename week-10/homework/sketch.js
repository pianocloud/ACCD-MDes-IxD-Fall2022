let PosX, PosY;
let radius = 400;
let angle = 0;
let speed = 0.03;

var time;
var wait = 1750;
var c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  rectMode(CENTER);

  PosX = windowWidth * 0.5;
  PosY = windowHeight * 0.5;

  time = millis();

  c = color(0, 0, 255);
}

function draw() {
  background(c);

  if (millis() - time >= wait) {
    c = color(random(255), random(255), random(255)); //if it is, change the background color
    time = millis(); //also update the stored time
  }

  textSize(windowWidth * 0.05);
  fill(255, 255, 255);
  text("pianocloud", windowWidth * 0.5, windowHeight * 0.5);
  textAlign(CENTER, CENTER);

  translate(PosX, PosY);
  rotate(angle);
  fill(0, 0, 0);
  circle(radius, 0, 600, 800);

  angle = angle + speed;
}
