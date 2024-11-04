let menuopen = document.querySelector(".part-1>h1 i");
let menuclose = document.querySelector(".nav-bar>.top i");
let navbar = document.querySelector(".nav-bar");
let navbaroverlay = document.querySelector(".navbar-overlay");
let main = document.querySelector("main");
let downarrow = document.querySelector(".nav-bar .bottom .account i");
let dropdown = document.querySelector(".nav-bar .bottom .dropdown");



menuopen.addEventListener("click",function(){
    navbar.style.opacity = '1';
    navbar.style.pointerEvents = 'auto';
    navbaroverlay.style.pointerEvents = 'auto';
    main.style.overflow = 'hidden';
    navbar.style.transform = 'translateX(0)';
    navbaroverlay.style.transform = 'translateX(0)';    
})

menuclose.addEventListener("click",function(){
    navbar.style.pointerEvents = 'none';
    main.style.overflow = 'auto';
    navbar.style.transform = 'translateX(-100%)';
    navbaroverlay.style.transform = 'translateX(-100%)';
})

navbaroverlay.addEventListener("click",function(){
    navbar.style.pointerEvents = 'none';
    main.style.overflow = 'auto';
    navbar.style.transform = 'translateX(-100%)';
    navbaroverlay.style.transform = 'translateX(-100%)';
})


downarrow.addEventListener("click",function(){
    if(dropdown.style.display == 'none') {
        dropdown.style.display = 'flex';
        downarrow.classList.add("ri-arrow-up-s-line");
        downarrow.classList.remove("ri-arrow-down-s-line");
    }else{
        dropdown.style.display = 'none';
        downarrow.classList.add("ri-arrow-down-s-line");
        downarrow.classList.remove("ri-arrow-up-s-line");
    }
}) 




let hoverElements1 = document.querySelectorAll(".part-2 .img-text h5, .part-4 .box .box-text a , .category .right h3 , .part-7 .left .left-text a , .part-9 .right .right-right a");

hoverElements1.forEach(function(hoverElement) {
    hoverElement.classList.add("hoverright");
});

let hoverElements2 = document.querySelectorAll(".part-10 a");

hoverElements2.forEach(function(hoverElement) {
    hoverElement.classList.add("part10-hover");
});















let carticon = document.querySelector(".icons .ri-shopping-cart-line");
let overlay = document.querySelector(".overlay");
let popright = document.querySelector(".pop-right");
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

overlay.addEventListener("click", function () {
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




let totalprice = 0;
let totalcount = 0;

let dataproduct = [
    {
        name: "Muesli Fitness Energy, gluten free",
        src: "/images/add to cart/01.png",
        price: 2.15,
        weight: "500g"
    },
    {
        name: "Fresh orange Klementina, Spain",
        src: "/images/add to cart/02.png",
        price: 3.12,
        weight: "1kg"
    },
    {
        name: "Pepsi soda classic, can",
        src: "/images/add to cart/03.png",
        price: 0.80,
        weight: "330ml"
    },
    {
        name: "Mozzarella mini cheese Granaloro",
        src: "/images/add to cart/04.png",
        price: 2.99,
        weight: "250g"
    },
    {
        name: "Coconut, Indonesia",
        src: "/images/add to cart/05.png",
        price: 1.24,
        weight: "1 coconut"
    },
    {
        name: "Pesto sauce Barilla with parmesan and basil",
        src: "/images/add to cart/06.png",
        price: 3.95,
        weight: "200g"
    },
    {
        name: "Fresh mango, Spain",
        src: "/images/add to cart/07.png",
        price: 1.99,
        weight: "1 mango"
    },
    {
        name: "Fresh green asparagus, bunch",
        src: "/images/add to cart/08.png",
        price: 2.40,
        weight: "300g"
    },
];

let pro = "";

dataproduct.forEach(function (elem) {
    pro += `<div class="card">
                        <div class="img">
                            <img src="${elem.src}" alt="">
                            <i class="ri-heart-3-line while"></i>
                            <i class="ri-eye-line quickview1"></i>
                            <i class="ri-shopping-cart-line addto"></i>
                        </div>
                        <h3 id="price">$${elem.price}</h3>
                        <h5 id="name">${elem.name}</h5>
                        <h5 id="weight">${elem.weight}</h5>
                    </div>`
});


document.querySelector(".part-5 .bottom").innerHTML = pro;


let addtocart = document.querySelectorAll(".addto");

addtocart.forEach(function (add, i) {
    add.addEventListener("click", () => {
        let name = dataproduct[i].name;
        let src = dataproduct[i].src;
        let price = dataproduct[i].price;

        updatecart(name, src, price);
        updateprice(price);
        updatecount(1);
    });
});


function updatecart(name, src, price) {
    let newdiv = document.createElement("div");
    newdiv.classList.add("addtocart");

    let quantityCount = 1;

    newdiv.innerHTML = `<div class="left">
                        <img src="${src}">
                    </div>
                    <div class="cen">
                        <h5 id="name">${name}</h5>
                        <h3 id="price">$${price}</h3>
                        <div class="quantity">
                            <i class="ri-subtract-line decrease"></i>
                            <span>${quantityCount}</span>
                            <i class="ri-add-line increase"></i>
                        </div>
                    </div>
                    <div class="right">
                        <i class="ri-close-large-line"></i>
                    </div>`

    document.querySelector(".pop-right .center").appendChild(newdiv);




    newdiv.querySelector(".decrease").addEventListener("click", () => {
        if (quantityCount > 1) {
            quantityCount--;
            updatecount(-1)
            updateprice(-price)
            newdiv.querySelector(".quantity span").innerHTML = quantityCount;
        }
    })
    newdiv.querySelector(".increase").addEventListener("click", () => {
        quantityCount++;
        updatecount(1)
        updateprice(price)
        newdiv.querySelector(".quantity span").innerHTML = quantityCount;
    })


    newdiv.querySelector(".right .ri-close-large-line").addEventListener("click", () => {
        newdiv.remove();
        updateprice(-price * quantityCount);
        updatecount(-quantityCount)
    });
};



function updateprice(price) {
    totalprice += price;
    document.querySelector("#subtotal").innerHTML = `$${totalprice.toFixed(2)}`
}


function updatecount(amount) {
    totalcount += amount;
    document.querySelector(".icons .ri-shopping-cart-line").setAttribute("data-count", totalcount)
}






let specialproduct = [
    {
        name: "Pure virgin olive oil Basso",
        src: "/images/add to cart/09.png",
        price: 18.60,
        weight: "1000ml"
    },
    {
        name: "Fresh pork butt steaks with rosemary",
        src: "/images/add to cart/10.png",
        price: 9.15,
        weight: "500g"
    },
    {
        name: "Fresh red grapefruit",
        src: "/images/add to cart/11.png",
        price: 3.40,
        weight: "1kg"
    },
    {
        name: "Soft creme cheese with greens Exquisa",
        src: "/images/add to cart/12.png",
        price: 2.59,
        weight: "150g"
    },
];


let pro2 = '';

specialproduct.forEach(function (specialproduct) {
    pro2 += `<div class="card hover">
                        <div class="img">
                            <img src="${specialproduct.src}" alt="">
                            <i class="ri-heart-3-line"></i>
                            <i class="ri-eye-line"></i>
                            <i class="ri-shopping-cart-line add"></i>
                        </div>
                        <h3 id="price">$${specialproduct.price}</h3>
                        <h5 id="name">${specialproduct.name}</h5>
                        <h5 id="weight">${specialproduct.weight}</h5>
                    </div>`
});

document.querySelector(".part-7 .bottom").innerHTML = pro2;

let add = document.querySelectorAll(".add");

add.forEach(function (add, i) {
    add.addEventListener("click", function () {
        let name = specialproduct[i].name;
        let src = specialproduct[i].src;
        let price = specialproduct[i].price;
        updatecart(name, src, price);
        updateprice(price);
        updatecount(1);
    })
})



let part = document.querySelector(".part-1");

window.addEventListener("scroll", function() {
    // Scroll position check karein
    if (window.scrollY > 0) {
        part.classList.add("fixed"); // Fixed class add karein
    } else {
        part.classList.remove("fixed"); // Fixed class remove karein
    }
});

