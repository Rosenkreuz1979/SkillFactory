window.onload = () => {
let button = document.querySelector(".button");
let icon1 = button.querySelector(".button-icon");
let icon2 = button.querySelector(".hidden-icon");

function switchVisibility(){
    icon1.classList.toggle("hidden");
    icon2.classList.toggle("hidden");
}


button.addEventListener("click", function(){
    switchVisibility();    
})

}