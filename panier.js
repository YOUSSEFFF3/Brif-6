// 1. Le tableau global (Catalogue complet incluant les accessoires)
const coffeeProducts = [
    { id: "c1", name: "Espresso Intense", category: "Base", price: 2.50, image: "espresso.jpg" },
    { id: "c2", name: "Cappuccino Mousseux", category: "Classique", price: 4.00, image: "cappuccino.jpg" },
    { id: "c3", name: "Latte Caramel", category: "Gourmand", price: 4.50, image: "latte.jpg" },
    { id: "c4", name: "Flat White", category: "Classique", price: 3.80, image: "flatwhite.jpg" },
    { id: "c5", name: "Iced Matcha Latte", category: "Froid", price: 5.00, image: "matcha.jpg" },
    { id: "c6", name: "Cold Brew", category: "Froid", price: 4.20, image: "coldbrew.jpg" },
    { id: "c7", name: "Cookie Pépites", category: "Snack", price: 2.00, image: "cookie.jpg" },
    { id: "c8", name: "Mug Isotherme Noir", category: "Accessoire", price: 15.00, image: "mug.jpg" },
    { id: "c9", name: "Filtres Papier V60 (x100)", category: "Accessoire", price: 6.50, image: "filters.jpg" },
    { id: "c10", name: "Tote Bag 'Coffee Lover'", category: "Accessoire", price: 12.00, image: "totebag.jpg" }
];
const productData = document.querySelector(".product-data")

const productContainer = document.querySelector(".product-cart")
// const panieSearch=document.

// console.log(document.querySelector(".product-data"));

const searchInput = document.querySelector("#search")

let commend_button = document.querySelector("#commend-button")

let card_section = document.querySelector(".information-paiement")

let panie_section = document.querySelector(".panie-section")

let returne = document.querySelector("#returne-button")

let cherchSection = document.querySelector(".recherche-section")

let sortir = document.querySelector(".sortir")

let ajouter = document.querySelector(".panie-button")

let product = []
console.log(product);
let bouttonPlus = document.querySelectorAll(".button-plus")
let bouttonMoin = document.querySelectorAll(".button-moin")
console.log(bouttonMoin);
data()
const box = document.querySelector(".panie-box")
const panieContainer = document.querySelector(".panier")
const boutton = document.querySelectorAll(".button")
// console.log(boutton);
boutton.forEach(pic => {
    pic.addEventListener("click", (e) => {
        const varialble = e.target.closest(".cart")
        console.log(varialble);
        let price = varialble.querySelector(".price-product").innerHTML
        let name = varialble.querySelector(".name-product").innerHTML

        productPanie(name, price)
        bouttonPlus = document.querySelectorAll(".button-plus")
        bouttonMoin = document.querySelectorAll(".button-moin")
        console.log(bouttonMoin);
        panie_section.classList.remove("hide")
        card_section.classList.add("hide")
        Plus()
        Moin()
        cherchSection.classList.add("hide")
    })
});

function Plus() {
    bouttonPlus.forEach(plus => {
        plus.addEventListener("click", (Z) => {
            const target = Z.target.closest(".panie-box")
            console.log(target);
            let quantity = target.querySelector(".conter>span")
            console.log(target.querySelector(".conter>span"));
            quantity.innerHTML = +quantity.innerHTML + 1
            total()

        })
    })
}
Plus()
function Moin() {
    bouttonMoin.forEach(plus => {
        plus.addEventListener("click", (Z) => {
            const target = Z.target.closest(".panie-box")
            console.log(target);
            let quantity = target.querySelector(".conter>span")
            console.log(target.querySelector(".conter>span"));
            if (quantity.innerHTML > 0) {
                quantity.innerHTML = +quantity.innerHTML - 1
                total()
            } else target.classList.add("hide")



        })
    })
}
Moin()
//*********************input search donne le contenue de l'object********** */
searchInput.addEventListener("input", (e) => {
    const valuee = e.target.value.toLowerCase()
    console.log(valuee);
    console.log(product);
    product.forEach(prod => {
        const isVisibel = prod.name.toLowerCase().includes(valuee)
        // console.log(prod.name.includes(valuee));
        // console.log(isVisibel);
        prod.element.classList.toggle("hide", !isVisibel)
    });
})
//***************clone de l HTML box panie**************** */
function productPanie(text, number) {
    const panie = box.cloneNode(true)
    console.log(panie);
    const paniePrice = panie.querySelector(".product-price")
    const panieName = panie.querySelector(".c2-Cappuccino-Mousseux")
    const defaultt = panie.querySelector(".c2-quantity")
    console.log(defaultt);

    defaultt.innerHTML = 1
    // console.log(panieName.innerHTML); 
    panieName.innerHTML = text
    paniePrice.innerHTML = number + " DH"
    panieContainer.append(panie)
    console.log(panieContainer);
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    paniePrice.dataset.unitPrice = number

}
//******************* */ donnais de le grand object**********************$ 
function data() {
    product = coffeeProducts.map(key => {
        const card = productData.cloneNode(true).children[0]
        const productName = card.querySelector(".name-product")
        const priceSearch = card.querySelector(".price-product")
        const categoryProduct = card.querySelector(".category-product")
        productName.innerHTML = key.name
        priceSearch.innerHTML = key.price
        // categoryProduct.textContent= key.category
        productContainer.append(card)
        return { name: key.name, element: card, price: key.price }
    });
}
// 2. Le tableau des produits dans le panier par défaut (avec un accessoire)
let coffeeCart = [
    {
        id: "c2",
        name: "Cappuccino-Mousseux",
        price: 4.00,
        quantity: 2,
        image: "cappuccino.jpg"
    },
    {
        id: "c3",
        name: "Latte-Caramel",
        price: 4.50,
        quantity: 1,
        image: "latte.jpg"
    },
    {
        id: "c8",
        name: "Mug-Isotherme-Noir",
        price: 15.00,
        quantity: 1,
        image: "mug.jpg"
    }
];

for (const key in coffeeCart) {
    let object = document.querySelector(`.${coffeeCart[key].id}-${coffeeCart[key].name}`)
    console.log(object);

    object.innerHTML = `${coffeeCart[key].name} `
    console.log(coffeeCart[key].name);
    let contiti = document.querySelector(`.${coffeeCart[key].id}-quantity`)
    contiti.innerHTML = `${coffeeCart[key].quantity} `
    console.log(`${coffeeCart[key].quantity} `);
    let price = document.querySelector(`#${coffeeCart[key].id}-price`)
    console.log(price);
    price.innerHTML = `${coffeeCart[key].price} DH `
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    price.dataset.unitPrice = coffeeCart[key].price
}
total()
commend_button.addEventListener("click", () => {
    panie_section.classList.add("hide")
    card_section.classList.remove("hide")
    // console.log("a");
})
ajouter.addEventListener("click", () => {
    cherchSection.classList.remove("hide")
    card_section.classList.add("hide")
    panie_section.classList.add("hide")
})
sortir.addEventListener("click", () => {
    panie_section.classList.remove("hide")
    card_section.classList.add("hide")
    cherchSection.classList.add("hide")
    // console.log("a");
})
returne.addEventListener("click", () => {
    card_section.classList.add("hide")
    panie_section.classList.remove("hide")
    // console.log("a");
})
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function total() {
    let totalPanier = 0;

    const boxes = document.querySelectorAll(".panier .panie-box");

    boxes.forEach(box => {
        const price = box.querySelector(".product-price");
        console.log(price);

        const quantity = box.querySelector(".conter > span");

        const unitPrice = Number(price.dataset.unitPrice);
        console.log(price.dataset.unitPrice);

        const quantite = Number(quantity.innerHTML);

        const productTotal = unitPrice * quantite;

        price.innerHTML = productTotal.toFixed(2) + " DH";

        totalPanier += productTotal;
    });

    document.querySelector("#price").innerHTML =
        totalPanier.toFixed(2) + " DH";
}

/////////validation ****************************$$
const emailPattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
const cardPattern = "^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3[0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$"
const nomPrenom = "^[a-zA-Z]{3,9}$"
const nome=document.querySelector("input[name=\"name\"]")
const prenom=document.querySelector("input[name=\"prènom\"]")
const email=document.querySelector("input[name=\"email\"]")
const creditCard=document.querySelector("input[name=\"cart-number\"]")
// const form = document.querySelector('#demoForm');
const formSub = document.querySelector('#demoForm')

formSub.addEventListener('submit', (event) => {
    event.preventDefault(); // stop the page from reloading
   
    //validation
    validation(nomPrenom, nome)
    validation(nomPrenom, prenom)
    validation(emailPattern, email)
    validation(cardPattern, creditCard)
    console.log( validation(nomPrenom, nome));
    


});


function validation(pattern, element) {
    element.addEventListener('input', (event) => {
        console.log('value is now', event.target.value);
        if (pattern.test(event.target.value)) {
            b.classList.remove("wrong")
        } else b.classList.add("wrong")
    });
}
