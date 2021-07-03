window.onload = () => {
let button1 = document.querySelector(".button-arrow");
let button2 = document.querySelector(".button-size");
let icon1 = button1.querySelector(".button-icon");
let icon2 = button1.querySelector(".hidden-icon");

function switchVisibility(){
    icon1.classList.toggle("hidden");
    icon2.classList.toggle("hidden");
}


button1.addEventListener("click", function(){ //10-1
    switchVisibility();    
})

button2.addEventListener("click", () => { //10-2
    alert(`Размеры экрана: Ширина:${window.screen.width} Высота:${window.screen.height}`); //экран
   // alert(`Размеры окна: Ширина:${window.innerWidth} Высота:${window.innerHeight}`); //окно
})


}