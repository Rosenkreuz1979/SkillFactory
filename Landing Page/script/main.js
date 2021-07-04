let images = [{
    url: "img/slider001.jpg",
    title: "Rostov-on-Don Admiral",
    city: "Rostov-on-Don LCD Admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon Request"
  },{
    url: "img/slider002.jpg",
    title: "Sochi Thieves",
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon Request"
  },{
    url: "img/slider003.jpg",
    title: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon Request"
  }];

function initSlider() {
    if (!images || !images.length) return;
  
    let sliderImages=document.querySelector(".front-gallery");
    let sliderArrows=document.querySelector(".slider_arrows");
    let sliderDots=document.querySelector(".slider_dots");
    let tabsImages=document.querySelector(".project-tabs");
    let projectSpecs=document.querySelector(".specs-wrapper");

    initImages();
    initArrows();
    initDots();

    function initImages() {
        images.forEach((image,index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            let tabsDiv = `<h5><a class="n${index} ${index ===0? "activelink" : ""} tab-link"  data-index="${index}">${images[index].title}</a></h5>`
            sliderImages.innerHTML += imageDiv;
            tabsImages.innerHTML += tabsDiv;
            tabsImages.querySelectorAll(".tab-link").forEach(tab => {
                tab.addEventListener("click", function() {
                    moveSlider(this.dataset.index);                
                })
            })
           let specs = `
           <div class="project-specs n${index} ${index === 0? "active" : ""}">
                <span>
                    <h4 class="title yellow caps">City:</h4>
                    <p class="smaller-text white">${images[index].city}</p>
                </span>
                <span>
                    <h4 class="title yellow caps">Apartment area:</h4>
                    <p class="smaller-text white">${images[index].area}</p>
                </span>
                <span>
                    <h4 class="title yellow caps">Repair Time:</h4>
                    <p class="smaller-text white">${images[index].time}</p>
                </span>
                <span>
                    <h4 class="title yellow caps">Repair Cost:</h4>
                    <p class="smaller-text white">${images[index].cost}</p>
                </span>  
            </div>  
            `;
            projectSpecs.innerHTML += specs;
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

    function toggleClass(item,num,clss){
        item.querySelector("."+clss).classList.remove(clss);
        item.querySelector(".n"+num).classList.add(clss);
    };

    function moveSlider(num) {
        toggleClass(sliderImages,num,"active");
        toggleClass(sliderDots,num,"active");
        toggleClass(tabsImages,num,"activelink");
        toggleClass(projectSpecs,num,"active");

         
    }


}

document.addEventListener("DOMContentLoaded", function() {
    initSlider();
});