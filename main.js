var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
})

function darkMode(){
    var dark = document.body;
    dark.classList.toggle("dark-mode");
}
