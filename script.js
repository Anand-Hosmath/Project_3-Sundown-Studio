const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function page4Animation () {
    var elemContainer = document.querySelector(".elem-container");
var fixed = document.querySelector(".fixed-img");

elemContainer.addEventListener("mouseenter",function(){
    fixed.style.display = "block";
})
elemContainer.addEventListener("mouseleave",function(){
    fixed.style.display = "none";
})

var elems = document.querySelectorAll(".elem");
elems.forEach(function(i){
    i.addEventListener("mouseenter", function(){
        var img = i.getAttribute("data-img")
        fixed.style.backgroundImage = `url(${img})`
    })
})
}

function swiperAnimation() {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
      });
}

function menuAnimation() {
        var menu = document.querySelector("nav h3")
        var fullscr = document.querySelector(".full-scr")
        var navimg = document.querySelector("nav img")
        var flag  = 0
        menu.addEventListener("click", function() {
        if(flag == 0) {
            fullscr.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        }else {
            fullscr.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })          
}

function loaderAnimation(){
    var loader = document.querySelector(".loader")
    setTimeout(() => {
    loader .style.top = "-100%"
    }, 4200);       
}

swiperAnimation()
page4Animation () 
menuAnimation()
loaderAnimation()
