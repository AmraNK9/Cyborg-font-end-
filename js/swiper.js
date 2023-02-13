
const swiper = new Swiper('.swiper', {
// Optional parameters
direction: 'horizontal',
loop: true,



// Navigation arrows
navigation: {
nextEl: '.bi-caret-right-fill',
prevEl: '.bi-caret-left-fill',
},
breakpoints: {

// when window width is >= 480px
480: {
slidesPerView: 1,
spaceBetween: 30
},
// when window width is >= 640px
640: {
slidesPerView: 2,
spaceBetween: 40
}
,
900:{
slidesPerView:3,
spaceBetween:40
}
}

});
