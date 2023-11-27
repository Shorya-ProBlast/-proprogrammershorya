let canvas1 = document.getElementById("canvasdropballsbg");

canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

let c1 = canvas1.getContext("2d");

let gravity = 4;
let friction = 1;
let circleNum1 = 100;

window.addEventListener('resize', function() {
  canvas1.width = window.innerWidth;
  canvas1.height = window.innerHeight;
  init();
});

let colorArray1 = [
  '#0000FF',
  '#FF00C5',
  '#C9FF00',
  '#FF0000',
  '#FF530D'
]

function Circle(x1, y1, dx1, dy1, radius1) {
  this.x = x1;
  this.y = y1;
  this.dx = dx1;
  this.dy = dy1;
  this.radius = radius1;
  this.color = colorArray1[Math.floor(Math.random() * colorArray1.length)];

  this.draw = function() {
    c1.beginPath();
    c1.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    c1.strokeStyle = "#000";
    c1.stroke();
    c1.fillStyle = this.color;
    c1.fill();
  }

  this.update = function() {
    if (this.x + this.radius + this.dx > canvas1.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius + this.dy > canvas1.height || this.y - this.radius < 0) {
      this.dy = -this.dy * friction;
    }

    else {
      this.dy += gravity;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

function init() {
  circleArray1 = [];
  for (let i = 0; i < circleNum1; i++) {
    let radius1 = Math.floor(Math.random() * 10 + 12);
    let x1 = Math.random() * (canvas1.width - radius1 * 2) + radius1;
    let y1 = Math.random() * (canvas1.height - radius1 * 2) + radius1;
    let dx1 = (Math.random() - 0.5) * 3;
    let dy1 = (Math.random() - 0.5) * 7;

    circleArray1.push(new Circle(x1, y1, dx1, dy1, radius1));
  }
}

let circleArray1 = [];

for (let i = 0; i < circleNum1; i++) {
  let radius1 = Math.floor(Math.random() * 10 + 12);
  let x1 = Math.random() * (canvas1.width - radius1 * 2) + radius1;
  let y1 = Math.random() * (canvas1.height - radius1 * 2) + radius1;
  let dx1 = (Math.random() - 0.5) * 3;
  let dy1 = (Math.random() - 0.5) * 7;

  circleArray1.push(new Circle(x1, y1, dx1, dy1, radius1));
}

function animate() {
  requestAnimationFrame(animate);
  c1.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray1.length; i++) {
    circleArray1[i].update();
  }
}
animate();