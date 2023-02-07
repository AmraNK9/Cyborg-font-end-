const body = document.querySelector("body");
const navLink = document.querySelectorAll(".nav-link");
const iframe = document.querySelector("iframe");
const nav = document.querySelector("nav");
navLink.forEach((el) => {
  el.addEventListener("click", (el2) => {
    navLink.forEach((el) => {
      el.classList.remove("active2");
    });
    el.classList.add("active2");
  });
});

setInterval(() => {
  if (localStorage.getItem("scroll-Dir") == "Down") {
    nav.classList.add("Hide-on-top");
  } else {
    nav.classList.remove("Hide-on-top");
  }
}, 300);
//browse section
navLink[0].addEventListener("click", (e) => {
  iframe.src = "Home.html";
});
navLink[1].addEventListener("click", (e) => {
  iframe.src = "Browse.html";
});
