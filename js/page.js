
const body = document.querySelector('body');

//scroll Direction Reigister
let previousScroll = 0;
let currentScroll = 0;

body.onscroll = ()=>{
    currentScroll = window.pageYOffset;
    if(currentScroll>previousScroll){
        localStorage.setItem('scroll-Dir','Down')        
    }
    else{
        localStorage.setItem('scroll-Dir','Up')        
    }
    previousScroll = window.pageYOffset
}

//scroll reveal
var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null,
    delay:300
};
var slideUpReset = {
    distance: '150%',
    origin: 'bottom',
    opacity: 100,
    reset:true
};

var slideTop = {
    distance: '100%',
    origin: 'top',
    opacity: 0,
    reset:true,
};

var slideLeft = {
    distance: '100%',
    origin: 'left',
    opacity: null,
};
var slideLeftReset = {
    distance: '100%',
    origin: 'left',
    opacity: null,
};
ScrollReveal().reveal('button',slideLeftReset);
ScrollReveal().reveal('slideLeft',slideLeft);

ScrollReveal().reveal(".slideTop",slideTop)
ScrollReveal().reveal('span',slideUpReset)
ScrollReveal().clean('.clean');
ScrollReveal().reveal('h2',slideLeftReset)
ScrollReveal().reveal('h4',slideTop)



