var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav");

hamburger.addEventListener("click", function(e){
    if (nav.classList.contains("active")) {
        nav.classList.remove("active")
    } else {
        nav.classList.add("active")
    }
})