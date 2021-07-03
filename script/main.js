window.onload = () => {
let button = document.querySelector(".button");
let icon1 = button.querySelector(".button-icon");
let icon2 = button.querySelector(".hidden-icon");

function switchVisibility(){
    if (icon1.classList.contains("visible")) {
        icon1.classList.remove("visible");
        icon1.classList.add("hidden");
        icon2.classList.remove("hidden");
        icon2.classList.add("visible");        
    } else {
        icon2.classList.remove("visible");
        icon2.classList.add("hidden");
        icon1.classList.remove("hidden");
        icon1.classList.add("visible");  
    }
}


button.addEventListener("click", function(){
    switchVisibility();
    
})

}