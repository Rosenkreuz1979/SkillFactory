let images = [{
    url: "img/Troop_K16_24.jpg",
    title: "Хатир Взошедший"
  }, {
    url: "img/Troop_K16_28.jpg",
    title: "Мейра Рассвет"
  }, {
    url: "img/Troop_K19_24.jpg",
    title: "Сестра Кошмаров"
  }, {
    url: "img/Troop_K19_25.jpg",
    title: "Тысячелистник"
  }, {
    url: "img/Troop_K22_19.jpg",
    title: "Гриммуара"
  }, {
    url: "img/Troop_K22_20.jpg",
    title: "Уллор"
  }, {
    url: "img/Troop_K22_21.jpg",
    title: "Ледяная Косатка"
  }, {
    url: "img/Troop_K27_22.jpg",
    title: "Дева-Лебедь"
  }, {
    url: "img/Troop_K28_22.jpg",
    title: "Росомаха-Оборотень"
  }, {
    url: "img/Troop_K29_20.jpg",
    title: "Акула-Оборотень"
  }, {
    url: "img/Troop_K65_00.jpg",
    title: "Охотник Адского Когтя Охотник Адского Когтя Охотник Адского Когтя Охотник Адского Когтя Охотник Адского Когтя Охотник Адского Когтя Охотник Адского Когтя"
  }, {
    url: "img/Troop_K65_01.jpg",
    title: "Маг Адского Когтя"
  }, {
    url: "img/Troop_K65_02.jpg",
    title: "Воин Адского Когтя"
  }, {
    url: "img/Troop_K66_00.jpg",
    title: "Келпи"
  }, {
    url: "img/Troop_K66_01.jpg",
    title: "Слоу"
  }, {
    url: "img/Troop_K66_02.jpg",
    title: "Темный Рыцарь"
  }];

function initSlider(options) {
    if (!images || !images.length) return;
    options = options || {
        titles: false,
        dots: true,
    };

    let sliderImages=document.querySelector(".slider_images");
    let sliderArrows=document.querySelector(".slider_arrows");
    let sliderDots=document.querySelector(".slider_dots");


    initImages();
    initArrows();
    if (options.dots){
        initDots();
    }
    if (options.titles){
    initTitle();
    }

    function initImages() {
        images.forEach((image,index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }

    function initArrows() {
        sliderArrows.querySelectorAll(".slider_arrow").forEach(arrow=> {
            arrow.addEventListener("click", function(){
                let currentSlide = +sliderImages.querySelector(".active").dataset.index;
                let nextSlide;
                if (arrow.classList.contains("left")) {
                    nextSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
                } else {
                    nextSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
                }
                moveSlider(nextSlide);
            });
        });
    }

    function initDots(){
        images.forEach((image,index) => {
            let dot = `<div class="slider_dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".slider_dots-item").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index);                
            })
        })
    }

    function initTitle(){
        let titleDiv = `<div class="slider_images-title">${images[0].title}</div>`;
        sliderImages.innerHTML += titleDiv;

    };

    function cropTitle(title,size) {
        if (title.length<= size) {
            return title;
        } else {
            return title.substr(0,size)+"...";
        }
    }

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        if (options.dots) {
            sliderDots.querySelector(".active").classList.remove("active");
            sliderDots.querySelector(".n"+num).classList.add("active");
        }

        if (options.titles) {
            let titleDiv = sliderImages.querySelector(".slider_images-title");
            if (!images[num].title) {
                titleDiv.innerText="";
            } else {            
                titleDiv.innerText = cropTitle(images[num].title,30);
            }
        }
        
    }


}

let sliderOptions = {
    titles : true,
    dots : true
}

document.addEventListener("DOMContentLoaded", function() {
    initSlider(sliderOptions);
});