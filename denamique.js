const config = {
    base: {
        espresso: { name: "Espresso", price: 18 },
        filtre: { name: "Filtre", price: 16 }
    },
    taille: {
        s: { name: "S · 150 ml", price: 0 },
        m: { name: "M · 250 ml", price: 4 },
        l: { name: "L · 350 ml", price: 8 }
    },
    lait: {
        vache: { name: "Lait de vache", price: 0 },
        avoine: { name: "Lait d'avoine", price: 4 },
        amande: { name: "Lait d'amande", price: 5 }
    },
    supplements: {
        caramel: { name: "Caramel", price: 3 },
        vanille: { name: "Vanille", price: 3 }
    }
};

for (let config_key in config) {

    for (let key in config[config_key]) {

        let Name = document.getElementById(`${config_key}-${key}-name`)

        // console.log(document.getElementById(`${config_key}-${key}-name`));

        Name.innerHTML = config[config_key][key].name

        let price = document.getElementById(`${config_key}-${key}-price`)

        price.innerHTML = config[config_key][key].price
    }
}
let the_order = {
    basse: {
        name: null,
        price: null,
    },
    taiille: {
        name: null,
        price: null,
    },
    laiit: {
        name: null,
        price: null,
    },
    suppplements: {
        name: null,
        price: null,
    }
}

let base = document.querySelectorAll("#premier-chois")
base[0].addEventListener("click", () => {
    base[0].classList.add("selected")
    base[1].classList.remove("selected")
    the_order.basse.name = document.getElementById("base-espresso-name").innerHTML
    // console.log( the_order.basse.price);
    the_order.basse.price = document.getElementById("base-espresso-price").innerHTML
    totale()
})

base[1].addEventListener("click", () => {
    base[1].classList.add("selected")
    base[0].classList.remove("selected")
    the_order.basse.name = document.getElementById("base-filtre-name").innerHTML
    the_order.basse.price = document.getElementById("base-filtre-price").innerHTML
    totale()
    // console.log( the_order.basse.price);
})

let suplemment = document.querySelectorAll("#deux-chois")
suplemment[0].addEventListener("click", () => {
    suplemment[0].classList.add("selected")
    suplemment[1].classList.remove("selected")
    the_order.suppplements.name = document.getElementById("supplements-caramel-name").innerHTML
    the_order.suppplements.price = document.getElementById("supplements-caramel-price").innerHTML
    totale()
})


suplemment[1].addEventListener("click", () => {
    suplemment[1].classList.add("selected")
    suplemment[0].classList.remove("selected")
    the_order.suppplements.name = document.getElementById("supplements-vanille-name").innerHTML
    the_order.suppplements.price = document.getElementById("supplements-vanille-price").innerHTML
    totale()
})
let taille = document.querySelectorAll("#two-chois")
taille[0].addEventListener("click", () => {
    taille[0].classList.add("selected")
    taille[1].classList.remove("selected")
    taille[2].classList.remove("selected")
    the_order.taiille.name = document.getElementById("taille-s-name").innerHTML
    the_order.taiille.price = document.getElementById("taille-s-price").innerHTML
    totale()
})
taille[1].addEventListener("click", () => {
    taille[1].classList.add("selected")
    taille[0].classList.remove("selected")
    taille[2].classList.remove("selected")
    the_order.taiille.name = document.getElementById("taille-m-name").innerHTML
    the_order.taiille.price = document.getElementById("taille-m-price").innerHTML
    totale()
})
taille[2].addEventListener("click", () => {
    taille[2].classList.add("selected")
    taille[0].classList.remove("selected")
    taille[1].classList.remove("selected")
    the_order.taiille.name = document.getElementById("taille-l-name").innerHTML
    the_order.taiille.price = document.getElementById("taille-l-price").innerHTML
    totale()
})
let milk = document.querySelectorAll("#third-chois")
milk[0].addEventListener("click", () => {
    milk[0].classList.add("selected")
    milk[1].classList.remove("selected")
    milk[2].classList.remove("selected")
    the_order.laiit.name = document.getElementById("lait-vache-name").innerHTML
    the_order.laiit.price = document.getElementById("lait-vache-price").innerHTML
    totale()
})
milk[1].addEventListener("click", () => {
    milk[1].classList.add("selected")
    milk[0].classList.remove("selected")
    milk[2].classList.remove("selected")
    the_order.laiit.name = document.getElementById("lait-avoine-name").innerHTML
    the_order.laiit.price = document.getElementById("lait-avoine-price").innerHTML
    totale()
})
milk[2].addEventListener("click", () => {
    milk[2].classList.add("selected")
    milk[0].classList.remove("selected")
    milk[1].classList.remove("selected")
    the_order.laiit.name = document.getElementById("lait-amande-name").innerHTML
    the_order.laiit.price = document.getElementById("lait-amande-price").innerHTML
    totale()
})
console.log(the_order);


// let a=document.getElementById("lait-amande-name").innerHTML
// console.log(a)

//  basse: {
//         name: null,
//         price: null, 
//     },
//     taiille: {
//         name: null,
//         price: null,
//     },
//     laiit: {
//         name: null,
//         price: null,
//     },
//     suppplements: {
//         name: null,
//         price: null,
//     }
// }

function totale() {
    let total = 0
    for (const order_type in the_order) {
        if (the_order[order_type].price != null) {
            // console.log("Type of str after conversion: ", the_order[order_type].price);
            total += Number(the_order[order_type].price)
            // console.log("Type of str after conversion: ", typeof +total);
            // console.log(total);
        } else continue;
    }
    let totale_price = document.getElementById("total-calcule")
    console.log(totale_price);
    totale_price.innerHTML = total;
    console.log(totale_price);
}

function loadPage2() {
    for (const order_key in the_order) {

        let naame = document.getElementById(`${order_key}-name`)
        console.log(naame, the_order[order_key].name);

        naame.innerHTML = the_order[order_key].name

        let pricce = document.getElementById(`${order_key}-price`)

        pricce.innerHTML = the_order[order_key].price
        console.log(naame.innerHTML);

    }
}


let hero = document.getElementById("hero")
let bill = document.getElementById("ticket-id")
const link = document.querySelectorAll(".a > a")
let total = document.getElementById("barr")

console.log(link);

link[0].addEventListener("click", () => {
    bill.classList.add("hidden")
    total.classList.remove("hidden")
    hero.classList.remove("hidden")
}
)
link[1].addEventListener("click", () => {
    hero.classList.add("hidden")
    total.classList.add("hidden")
    bill.classList.remove("hidden")
    loadPage2()
}
)

