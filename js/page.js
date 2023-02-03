
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
ScrollReveal().reveal('button',{
    delay:500,
    reset:true
});
ScrollReveal().reveal(".card",{
    delay:300,
    reset:true
})
