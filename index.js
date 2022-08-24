
let sun = document.getElementById('sun');
let behind = document.getElementById('behind');
let text = document.getElementById('text');
let front = document.getElementById('front');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sun.style.top = value * 1.05 + 'px';
    behind.style.top = value * 0.5 + 'px';
    front.style.top = value * 0.5 + 'px';
    text.style.marginRight = value * 7 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.25 + 'px';
})