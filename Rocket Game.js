// ---------- Variables ---------- //

const scene = document.querySelector('.scene');
let steering_wheel = document.querySelector('.steering-wheel');
let rocket_interior = document.querySelector('.rocket-bg-img');
let asteroid_add_class = document.querySelector('.asteroid_add_class');

let asteroid_position = 2000;
let game_over_box = document.querySelector('.game_over');
let start_interface = document.querySelector('.starting_interface');
let start_btn = document.getElementById('startBtn');

let black_screen_game_over = document.querySelector('.black_screen_game_over');
let restart_btn = document.getElementById('restart');
let asteroid_size = 500;
let bg_music = new Audio('assets/bg_music.mp3');

let score_bar = document.getElementById('score_bar');
let score_num = 0;

let bg_music_vol = 0.03;

// ---------- Stars Background Divs ---------- //

const CreateDiv = () => {
    for (let i = 0; i < 310; i++) {
        scene.innerHTML += `<div class="stars"></div>`;
    }
}
CreateDiv();

// ---------- Stars Positioning ---------- //

const stars = document.querySelectorAll('.stars');
stars.forEach(star => {
    let x = `${Math.random() * 600}vmax`;
    let y = `${Math.random() * 100}vh`;
    let z = `${Math.random() * 200 - 100}vmin`;
    let rx = `${Math.random() * 360}deg`;
    star.style.setProperty('--x', x);
    star.style.setProperty('--y', y);
    star.style.setProperty('--z', z);
    star.style.setProperty('--rx', rx);
    let delay = `${Math.random() * 1}s`;
    star.style.animationDelay = delay;
});

// ---------- Functions ---------- //

// ---------- Generate Random Integer ---------- //

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// ---------- Game Start Logic ---------- //

window.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        gameLogic();
    }
});

start_btn.addEventListener('click', function () {

    // ---------- Background Music ---------- //

    bg_music.play();
    bg_music.loop = true;
    bg_music.volume = bg_music_vol;

    gameLogic();
});

// ---------- Game Logic ---------- //

function gameLogic() {
    start_interface.style.display = 'none';
    score_bar.style.display = 'flex';
    score_bar.innerHTML = `Score: 0`;
    asteroid_add_class.classList.add('asteroid');

    setTimeout(() => {
        asteroid_add_class.classList.remove('asteroid_add_class');
    }, 10);

    let asteroid = document.querySelector('.asteroid');

    // ---------- POSITION ELEMENTS (ON KEYDOWN or ON KEYUP) ---------- //

    // ---------- ON KEYDOWN ---------- //

    window.addEventListener('keydown', function (event) {
        if (event.key == 'ArrowRight' || event.key == 'd' || event.key == 'D') {
            steering_wheel.style.rotate = '30deg';
            rocket_interior.style.rotate = '3deg';
            scene.style.transform = `perspective(2000px) rotateZ(30deg)`;
            asteroid.style.left = `-${asteroid_position}px`;
        }

        else if (event.key == 'ArrowLeft' || event.key == 'a' || event.key == 'A') {
            steering_wheel.style.rotate = '-30deg';
            rocket_interior.style.rotate = '-3deg';
            scene.style.transform = `perspective(2000px) rotateZ(-30deg)`;
            asteroid.style.left = `${asteroid_position}px`;
        }
    });

    // ---------- ON KEYUP ---------- //

    window.addEventListener('keyup', function (event) {
        // console.log("You pressed: " + event.key);

        // ---------- RIGHT ARROW / d / D ---------- //

        if (event.key == 'ArrowRight' || event.key == 'd' || event.key == 'D') {
            steering_wheel.style.rotate = '0deg';
            rocket_interior.style.rotate = '0deg';
            scene.style.transform = `perspective(2000px) rotateZ(0deg)`;

            setInterval(() => {
                let asteroid_rect = asteroid.getBoundingClientRect();
                let asteroid_left = asteroid_rect.left;
                asteroid.style.left = `${asteroid_left + 50}px`;
            }, 100);
        }

        // ---------- LEFT ARROW / a / A ---------- //

        else if (event.key == 'ArrowLeft' || event.key == 'a' || event.key == 'A') {
            steering_wheel.style.rotate = '0deg';
            rocket_interior.style.rotate = '0deg';
            scene.style.transform = `perspective(2000px) rotateZ(0deg)`;

            setInterval(() => {
                let asteroid_rect = asteroid.getBoundingClientRect();
                let asteroid_left = asteroid_rect.right;
                asteroid.style.left = `${asteroid_left - 50}px`;
            }, 100);
        }
    });

    // ---------- Game Over Detection Logic ---------- //

    setInterval(() => {
        gameOver();
    }, 100);

    function gameOver() {

        let asteroid_rect = asteroid.getBoundingClientRect();
        let asteroid_width = asteroid_rect.width;
        let asteroid_height = asteroid_rect.height;

        if (asteroid_width == asteroid_size && asteroid_height == asteroid_size && asteroid.style.display != 'none') {

            black_screen_game_over.style.display = 'flex';

            setTimeout(() => {
                score_bar.style.display = 'none';
                game_over_box.style.display = 'flex';
                black_screen_game_over.style.background = '#000';
                asteroid.style.display = 'none';
            }, 3390);
        }
    }

    setInterval(() => {
        let asteroid_rect = asteroid.getBoundingClientRect();
        let screen_width = window.innerWidth;
        let asteroid_width = asteroid_rect.width;
        let asteroid_x = asteroid_rect.x;

        if (asteroid_x > screen_width - 50 || asteroid_x < -asteroid_width + 50) {
            asteroid.style.display = 'none';

            score_num += 1;
            score_bar.innerHTML = `Score: ${score_num}`;

            setTimeout(() => {
                asteroid.style.display = 'flex';
                let asteroid_rect = asteroid.getBoundingClientRect();
                let asteroid_x = randomIntFromInterval(asteroid_size + 50, window.innerWidth - asteroid_size);
                let asteroid_y = randomIntFromInterval(85, 320);

                // console.log('X: ' + asteroid_x + " Y: " + asteroid_y);

                asteroid.style.transition = '0s';

                setTimeout(() => {
                    asteroid.style.transition = '8s';
                }, 100);

                asteroid.style.transform = `translate(0px, 0px)`;
                asteroid.style.left = asteroid_x + 'px';
                asteroid.style.top = asteroid_y + 'px';

            }, 100);
        }
    }, 1000);

    window.addEventListener('keydown', function (e) {

        if (e.key == 'ArrowRight' || e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A' || e.key == 'd' || e.key == 'D') {

        }

        // ---------- Reloading on pressing Enter Key ---------- //

        if (e.key == 'Enter' && game_over_box.style.display == 'flex') {
            window.location.reload(true);
        }
    });
}

// ---------- Restart Button Logic ---------- //

restart_btn.addEventListener('click', function () {
    window.location.reload(true);
});