// ---------- Variables ---------- //

let about_slide = document.querySelector('.about');
let about_text = document.querySelector('.about-text');
let next_btn_slide_2 = document.querySelector('.next-btn');
let slide_3 = document.querySelector('.slide3and4container');
let btn = document.querySelectorAll('.btn');

let btn_ext = document.querySelectorAll('.btn-ext');
let slide3_back_btn = document.querySelector('.slide3back-btn');
let shorya = document.querySelector('.shorya');
let shorya_text = document.querySelector('.shorya_text_heading');
let arav = document.querySelector('.arav');

let arav_text = document.querySelector('.arav_text_heading');
let stgs = document.querySelector('.school');
let stgs_text = document.querySelector('.stgs_text_heading');
// let bg_music = new Audio('assets/bg_music.mp3');
// let btn_sound = new Audio('assets/button_click.mp3');
let bg_music_vol = 1;

// ---------- Home Page Sound ---------- //

window.addEventListener('click', function () {
    bg_music.play();
    bg_music.loop = true;
    bg_music.volume = bg_music_vol;
});

// ---------- Btn Sound - Internal Linking ---------- //

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        btn_sound.play();
        btn_sound.volume = 1.5;
    });
}

// ---------- Btn Sound - External Linking ---------- //

for (let i = 0; i < btn_ext.length; i++) {
    btn_ext[i].addEventListener('mouseover', function () {
        btn_sound.play();
        btn_sound.volume = 1.5;
    });
}

// ---------- Slide 2 About Animation ---------- //

window.onscroll = function () { aboutTextDisplay() };

function aboutTextDisplay() {
    if (document.documentElement.scrollTop > 400) {
        about_text.classList.add('about-text-ani');
    } else {
        about_text.classList.remove('about-text-ani');
    }
}

// ---------- Slide 2 Next Btn Slide Animation ---------- //

next_btn_slide_2.addEventListener('click', function () {
    if (slide_3.style.right != '0%') {
        slide_3.style.right = '0%';
        about_slide.style.left = '-100%';
    } else {
        slide_3.style.right = '-100%';
        about_slide.style.left = '0%';
    }
});

slide3_back_btn.addEventListener('click', function () {
    if (slide_3.style.right != '-100%') {
        slide_3.style.right = '-100%';
        about_slide.style.left = '0%';
    } else {
        slide_3.style.right = '0%';
        about_slide.style.left = '-100%';
    }
});

// ---------- Shorya Text - Slide 2 ---------- //

shorya.addEventListener('mouseover', function () {
    setTimeout(() => {
        shorya_text.style.display = 'block';
        shorya_text.classList.add('text_animation');
        shorya_text.classList.remove('text_animation_reverse');
    }, 250);
});

shorya.addEventListener('mouseleave', function () {
    shorya_text.classList.remove('text_animation');
    shorya_text.classList.add('text_animation_reverse');

    setTimeout(() => {
        shorya_text.style.display = 'none';
    }, 220);
});

// ---------- STGS Text - Slide 2 ---------- //

stgs.addEventListener('mouseover', function () {
    setTimeout(() => {
        stgs_text.style.display = 'block';
        stgs_text.classList.add('text_animation');
        stgs_text.classList.remove('text_animation_reverse');
    }, 250);
});

stgs.addEventListener('mouseleave', function () {
    stgs_text.classList.remove('text_animation');
    stgs_text.classList.add('text_animation_reverse');

    setTimeout(() => {
        stgs_text.style.display = 'none';
    }, 220);
});

// ---------- Arav Text - Slide 2 ---------- //

arav.addEventListener('mouseover', function () {
    setTimeout(() => {
        arav_text.style.display = 'block';
        arav_text.classList.add('text_animation');
        arav_text.classList.remove('text_animation_reverse');
    }, 250);
});

arav.addEventListener('mouseleave', function () {
    arav_text.classList.remove('text_animation');
    arav_text.classList.add('text_animation_reverse');

    setTimeout(() => {
        arav_text.style.display = 'none';
    }, 220);
});

// ---------- Main Page Background ---------- //

let ani_balls_holder = document.querySelector('.ani-balls-holder');
for (let i = 0; i <= 1835; i++) {
    let dot = document.createElement('div')
    dot.classList.add('element');
    ani_balls_holder.appendChild(dot);
}
let grid = [30, 30]
let dotAll = document.querySelectorAll('.element')
let animation = anime.timeline({
    targets: dotAll,
    easing: 'easeInOutExpo',
    loop: true,
})
animation
    .add({
        rotate: function () { return anime.random(0, 0) },
        translateY: function () { return anime.random(0, 0) },
        delay: anime.stagger(50, { grid: grid, from: 'center' }),
        keyframes: [
            {
                background: "#f00"
            },
            {
                background: "#0f0"
            },
            {
                background: "#f0f"
            },
            {
                background: "#ff0"
            },
            {
                background: "#0ff"
            },
            {
                background: "#333"
            },
        ]
    })
animation
    .add({
        rotate: function () { return anime.random(0, 0) },
        translateY: function () { return anime.random(0, 0) },
        delay: anime.stagger(10, { grid: grid, from: 'center' }),
        keyframes: [
            {
                background: "#f00"
            },
            {
                background: "#0f0"
            },
            {
                background: "#f0f"
            },
            {
                background: "#ff0"
            },
            {
                background: "#0ff"
            },
            {
                background: "#333"
            },
        ]
    });

// ---------- Slide 2 Background ---------- //

let canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

// Utility Function

/**
 * Rotates coordinate system for velocities
 *
 * Takes velocities and alters them as if the coordinate system they're on was rotated
 *
 * @param  Object | velocity | The velocity of an individual particle
 * @param  Float  | angle    | The angle of collision between two objects in radians
 * @return Object | The altered x and y velocities after the coordinate system has been rotated
 */

function rotate(velocity, angle) {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };

    return rotatedVelocities;
}

/**
 * Swaps out two colliding particles' x and y velocities after running through
 * an elastic collision reaction equation
 *
 * @param  Object | particle      | A particle object with x and y coordinates, plus velocity
 * @param  Object | otherParticle | A particle object with x and y coordinates, plus velocity
 * @return Null | Does not return a value
 */

function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m2 - m1) / (m1 + m2) + u1.x * 2 * m1 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
    }
}

// Utility Function Ends

let mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse.x, mouse.y);
});

let colorArray = [
    '#f00',
    '#0f0',
    '#f0f',
    '#ff0',
    '#0ff',
    '#0023ec'
];

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init2();
});

function distance(x1, y1, x2, y2) {
    let xDist = x2 - x1;
    let yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity = {
        x: (Math.random() - 0.5) * 40,
        y: (Math.random() - 0.5) * 40
    }
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.mass = 1;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fill();
        c.fillStyle = this.color;
        c.closePath();
    }

    this.update = function () {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.velocity.x = -this.velocity.x;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.velocity.y = -this.velocity.y;
        }

        for (let i = 0; i < particles.length; i++) {
            if (this === particles[i]) continue;

            if (distance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0) {
                resolveCollision(this, particles[i]);
            }
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.draw();
    }
}

let particles = [];
function init2() {
    particles = [];
    for (let i = 0; i < 100; i++) {
        let radius = Math.random() * 5 + 10;
        let x = Math.random() * (canvas.width - radius * 2) + radius;
        let y = Math.random() * (canvas.height - radius * 2) + radius;

        for (let j = 0; j < particles.length; j++) {
            if (distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
                x = Math.random() * (canvas.width - radius * 2) + radius;
                y = Math.random() * (canvas.height - radius * 2) + radius;

                j = -1;
            }
        }

        particles.push(new Particle(x, y, radius));
    }
}


function animate2() {
    requestAnimationFrame(animate2);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
    }
}
init2();
animate2();