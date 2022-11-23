class Particle {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);
    this.vel = createVector(random(-3, 3), random(-3, 3));

    this.radius = random(50, 100);
    this.partColor = color(random(TWO_PI), 0.9, 0.9);
    this.friendliness = random(70, 250);
  }

  move() {
    this.pos.add(this.vel);

    if (this.pos.x - this.radius <= 0 || this.pos.x + this.radius >= width) {
      this.vel.x *= -1;
    }
    if (this.pos.y - this.radius <= 0 || this.pos.y + this.radius >= width) {
      this.vel.y *= -1;
    }
  }

  display() {
    fill(this.partColor);
    noStroke();
    circle(this.pos.x, this.pos.y, this.radius * 2);
  }

  reachOut(_allParticles) {
    _allParticles.forEach((otherP)=>{
      if(this.pos.dist(otherP.pos) <= this.friendliness){
        stroke(0, 0, 1)
        line(this.pos.x, this.pos.y, otherP.pos.x, otherP.pos.y)
      }
      
    })
  }
}
