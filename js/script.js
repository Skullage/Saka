// const { active } = require("browser-sync");
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

// Табы на мобилке в футере

const g = document.querySelectorAll(".footer-tab");

g.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        this.classList.toggle("active");
    });
 });

// Бургер меню

document.querySelector(".menu-burger").onclick = function() {
    this.classList.toggle("active");
    document.querySelector("body").classList.toggle("fixed-page");
    document.querySelector(".header").classList.toggle("active");
}

// Табы в отзывах

const tab_review = document.querySelector(".tab");

for(var i = 0; i < tab_review.children.length; i++) {
    (
        function(index) {
            document.getElementsByClassName('tab__button')[i].onclick = function (){
                if(!document.getElementsByClassName('tab')[index].classList.contains("active")) {
                    document.querySelector('.tab.active').classList.toggle("active");
                    document.querySelector('.tab__button.active').classList.toggle("active");
                    document.getElementsByClassName('tab')[index].classList.toggle("active");
                    document.getElementsByClassName('tab__button')[index].classList.toggle("active");
                }
            }
        }
    )(i);
}
