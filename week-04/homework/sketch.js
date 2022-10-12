let gridStep = 20;
let radius = 5;


function setup() {
  createCanvas(1600, 900);
  colorMode(HSB);
  background(270, 100, 100);
}

function draw() {
  
  for (let x = 0; x < width/gridStep; x++){
    for (let y = 0; y < height/gridStep; y++){
      let posX = (x * gridStep) + (gridStep * 0.5);
      let posY = (y * gridStep) + (gridStep * 0.5);
      
      fill(90, 0, 100);
      noStroke();
      circle(posX, posY, radius*2);
      
      fill(90, 100, 100);
      square(posX, posY, radius*2);
    }
  }


  noStroke();
  textSize(100);
  fill(45, 100, 100);
  text('PIANOCLOUD', 400, 450);
  textAlign(CENTER, CENTER);
  noLoop();
  
}

//noStroke();
  fill(90, 100, 100);
  square(10, 10, 10);

  noFill();
  stroke(90, 0, 100);
  strokeWeight(10)
  square(20, 20, 20);
  
  noStroke();
  fill(90, 100, 100);
  square(40, 40, 40);
  
  noFill();
  stroke(90, 0, 100);
  square(80, 80, 80);
  
  noStroke();
  fill(90, 100, 100);
  square(160, 160, 160);
  
  noFill();
  stroke(90, 0, 100);
  square(320, 320, 320);

  noStroke();
  fill(90, 100, 100);
  square(640, 640, 640);