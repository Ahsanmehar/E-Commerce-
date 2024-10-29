let carticon = document.querySelector(".icons .ri-shopping-cart-line");
let overlay = document.querySelector(".overlay");
let popright = document.querySelector(".pop-right");
let main = document.querySelector("main");
let close = document.querySelector(".pop-right .top .heading .ri-close-large-line");

    carticon.addEventListener("click", () => {
        overlay.style.transform = 'translateX(0)';
        overlay.style.opacity = '1';

        popright.style.transform = 'translateX(0)';
        popright.style.opacity = '1';
        main.style.overflow = 'hidden';
    });

    close.addEventListener("click", function () {
        overlay.style.transform = 'translateX(-100%)';
        overlay.style.opacity = '0';

        popright.style.opacity = '0';
        popright.style.transform = 'translateX(100%)';
        main.style.overflow = 'auto';
    })






let slide = document.querySelectorAll(".part-3 .img");
let dot = document.querySelectorAll(".part-3 .dot");
let count = 0;

function update(count) {
    slide.forEach(function (slides) {
        slides.classList.remove("active")
    });
    dot.forEach(function (dots) {
        dots.classList.remove("active")
    });

    dot[count].classList.add("active")
    slide[count].classList.add("active")
}

dot.forEach(function (dots, i) {
    dots.addEventListener("click", function () {
        update(i)
    })
})

setInterval(() => {
    count = (count + 1) % slide.length;
    update(count)
}, 4000)




let dataproduct = [
    {
        name: "Muesli Fitness Energy, gluten free",
        src: "/images/add to cart/01.png",
        price: "$2.15",
        weight: "500g"
    },
    {
        name: "Fresh orange Klementina, Spain",
        src: "/images/add to cart/02.png",
        price: "$3.12",
        weight: "1kg"
    },
    {
        name: "Pepsi soda classic, can",
        src: "/images/add to cart/03.png",
        price: "$0.80",
        weight: "330ml"
    },
    {
        name: "Mozzarella mini cheese Granaloro",
        src: "/images/add to cart/04.png",
        price: "$2.99",
        weight: "250g"
    },
    {
        name: "Coconut, Indonesia",
        src: "/images/add to cart/05.png",
        price: "$1.24",
        weight: "1 coconut"
    },
    {
        name: "Pesto sauce Barilla with parmesan and basil",
        src: "/images/add to cart/06.png",
        price: "$3.95",
        weight: "200g"
    },
    {
        name: "Fresh mango, Spain",
        src: "/images/add to cart/07.png",
        price: "$1.99",
        weight: "1 mango"
    },
    {
        name: "Fresh green asparagus, bunch",
        src: "/images/add to cart/08.png",
        price: "$2.40",
        weight: "300g"
    },
];

let pro = "";

dataproduct.forEach(function (elem) {
    pro += `<div class="card">
                        <div class="img">
                            <img src="${elem.src}" alt="">
                            <i class="ri-heart-3-line"></i>
                            <i class="ri-shopping-cart-line"></i>
                        </div>
                        <h3 id="price">${elem.price}</h3>
                        <h5 id="name">${elem.name}</h5>
                        <h5 id="weight">${elem.weight}</h5>
                    </div>`
});


document.querySelector(".part-5 .bottom").innerHTML = pro;


for(let i = 0; i < dataproduct.length; i++){
    console.log(dataproduct[i])
}