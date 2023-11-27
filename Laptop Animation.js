let light = document.querySelector('.light');
let laptop_top = document.querySelector('.laptop-top');
let laptop_keyboard_container = document.querySelector('.laptop-keyboard-container');
let pendrive = document.querySelector('.pendrive');
let laptop = document.querySelector('.laptop');
let desktop_links = document.querySelectorAll('.desktop-links');
let backbtn = document.querySelector('.backbtn');

let google = document.querySelector('.google');
let gmail = document.querySelector('.gmail');
let facebook = document.querySelector('.facebook');
let outlook = document.querySelector('.outlook');
let instagram = document.querySelector('.instagram');
let replit = document.querySelector('.replit');
let twitter = document.querySelector('.twitter');
let youtube = document.querySelector('.youtube');

setTimeout(() => {
    laptop_top.classList.add('laptop-open-ani');
    laptop_keyboard_container.classList.add('laptop-keyboard-container-ani');
    pendrive.classList.add('pendrive-rotate-ani');
    laptop.classList.add('laptop-container-ani');
}, 7000);

setTimeout(() => {
    light.classList.add('light-ani');
}, 5000);

function googlePage() {
    google.style.display = 'flex';
}

function gmailPage() {
    gmail.style.display = 'flex';
}

function facebookPage() {
    facebook.style.display = 'flex';
}

function outlookPage() {
    outlook.style.display = 'flex';
}

function instagramPage() {
    instagram.style.display = 'flex';
}

function replitPage() {
    replit.style.display = 'flex';
}

function twitterPage() {
    twitter.style.display = 'flex';
}

function youtubePage() {
    youtube.style.display = 'flex';
}

function backFun() {
    for (let i = 0; i < desktop_links.length; i++) {
        desktop_links[i].style.display = 'none';
    }
}

function shutFun() {
    laptop_top.classList.remove('laptop-open-ani');
    laptop_top.classList.add('laptop-close-ani');
    laptop_keyboard_container.classList.remove('laptop-keyboard-container-ani');
    laptop_keyboard_container.classList.add('laptop-keyboard-container-ani-close');
    laptop.classList.remove('laptop-container-ani');
    laptop.classList.add('laptop-container-ani-close');
    pendrive.classList.remove('pendrive-rotate-ani');
    pendrive.classList.add('pendrive-rotate-ani-close');

    setTimeout(() => {
        light.classList.remove('light-ani');
    }, 5000);

    for (let i = 0; i < desktop_links.length; i++) {
        desktop_links[i].style.display = 'none';
    }
}