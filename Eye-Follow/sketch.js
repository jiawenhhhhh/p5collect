let objs = [];
let transit_x, transit_y;
let x_amount, y_amount;
let r = 50;
function windowResized() {
  createCanvas(windowWidth, windowHeight);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  x_amount = width / r;
  y_amount = height / r;
  for (i = 0; i < x_amount; i++) {
    for (let k = 0; k < y_amount; k++) {
      objs.push(new Obj(r + i * 2 * r, r + k * 2 * r, r));
    }
  }
}

function draw() {
  background(220);
  for (let i = 0; i < x_amount * y_amount; i++) {
    objs[i].display();
  }
}
class Obj {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  display() {
    noStroke();
    //WHITE
    fill(255);
    circle(this.x, this.y, 2 * r);
    //PUPIL
    fill(0);
    transit_x = map(mouseX, 0, width, -r / 2, r / 2);
    transit_y = map(mouseY, 0, height, -r / 2, r / 2);
    circle(this.x + transit_x, this.y + transit_y, r);
    //RED DOT
    fill(255, 0, 0);
    circle(mouseX, mouseY, 10);
    //LINE
    stroke(0);
    //line(mouseX, mouseY, this.x, this.y);
  }
}

