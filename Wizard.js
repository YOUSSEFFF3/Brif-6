/*<div class="input-grp">
    <label for="product-name">Product Name*</label>
    <input type="text" name="product-name">
      <span class="erro-message-name"></span>
</div>*/


// $$$$$$$$$$$$$$$$$$$$$$ regex patterne$$$$$$$$$$$$$$$$$$$$$$$$$
const nomRegex = /^[A-ZÀ-ÖØ-Þ][a-zA-ZÀ-ÿ'-]*(?:\s[A-ZÀ-ÖØ-Þ][a-zA-ZÀ-ÿ'-]*){0,2}$/;
const prixRegex = /^[0-9]{1,3}(\.[0-9]{1,2})?$/;
const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%+~#?&/=]*)$/;
const reductionRegex = /^(100|[1-9]?[0-9])$/;
// $$$$$$$$$$$$$$$$$$$$$$ errerrrs $$$$$$$$$$$$$$$$$$$$$$$$$

// $$$$$$$$$$$$$$$$$$$$$$ chexbox $$$$$$$$$$$$$$$$$$$$$$$$$
const reduction = document.querySelector("#reduction");
const pourcentage = document.querySelector(".discount")
const expiration = document.querySelector(".date")
// $$$$$$$$$$$$$$$$$$$$$$ les inputes $$$$$$$$$$$$$$$$$$$$$$$$$

const namek = document.querySelector(".name")
const price = document.querySelector(".price")
const image = document.querySelector(".image")
// $$$$$$$$$$$$$$$$$$$$$$ ramasage de data  $$$$$$$$$$$$$$$$$$$$$$$$$
const firstStep = document.querySelector(".first-step")
let supl2 = document.querySelector("#check-2supl")
let supl3 = document.querySelector("#check-3supl")
let taille1 = document.querySelector("#check-1taille")
let supl1 = document.querySelector("#check-1supl")
let lait4 = document.querySelector("#check-4lait")
let lait3 = document.querySelector("#check-3lait")
let lait2 = document.querySelector("#check-2lait")
let lait1 = document.querySelector("#check-1lait")
let taille3 = document.querySelector("#check-3taille")
let taille2 = document.querySelector("#check-2taille")
let chaude = document.querySelector(".chaud")
let glace = document.querySelector(".glace")
const defaul = true
let defaulArrray = []
const secondStep = document.querySelector(".second-step")
const thirdStep = document.querySelector(".third-section")
let data = {
    Name: null,
    priice: null,
    imaage: null,
    disccount: null,
    Date: null,
    Température: null,
    intensite: null,
    Small: null,
    Large: null,
    Medium: null,
    Vache: null,
    Avoine: null,
    Soja: null,
    Amande: null,
    Vanille: null,
    Caramel: null,
    Noisette: null,
}
console.log(data);

// $$$$$$$$$$$$$$$$$$$$$$ les evenement $$$$$$$$$$$$$$$$$$$$$$$$$

const next = document.querySelector("#next-btn")
next.addEventListener("click", (e) => {
    e.preventDefault()
    validation()

})
const neext = document.querySelector("#next2")
neext.addEventListener("click", (e) => {
    e.preventDefault()
    validation2()




})
const periviouse = document.querySelector("#periviouse")
periviouse.addEventListener("click", (e) => {
    e.preventDefault()
    firstStep.classList.remove("hide")
    secondStep.classList.add("hide")
    thirdStep.classList.add("hide")
})
const periviouse2 = document.querySelector("#periviouse2")
periviouse2.addEventListener("click", (e) => {
    e.preventDefault()
    firstStep.classList.add("hide")
    secondStep.classList.remove("hide")
    thirdStep.classList.add("hide")
})
const submit = document.querySelector('form')
submit.addEventListener("submit", (e) => {
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
})
// $$$$$$$$$$$$$$$$$$$$$$ les function  $$$$$$$$$$$$$$$$$$$$$$$$$

let x = []
let y = true
function validation() {
    chek(namek, nomRegex, "Name")
    chek(price, prixRegex, "priice")
    chek(image, urlRegex, "imaage")
    if (reduction.checked) {
        chek(pourcentage, reductionRegex,"disccount")
    }
    if (x.some(checkVlidation)) {
        x = []
        Swal.fire({
            title: "Makhdamch lvalidation ",
            text: "Invalide , réessayer !!!",
            icon: "error"
        },
        ); return
    }
    document.querySelector("#stepper2").classList.add("active")
    firstStep.classList.add("hide")
    secondStep.classList.remove("hide")
    thirdStep.classList.add("hide")
    console.log(x);
    console.log(data);


}
function checkVlidation(x) {
    return x == false
}

reduction.addEventListener('click', (e) => {

    if (reduction.checked) {

        document.querySelector(".donne-reduction").classList.remove("hide")
        document.querySelector(".data-discount").classList.remove("hide")

    } else {
        document.querySelector(".donne-reduction").classList.add("hide")
    }
});

function chek(a, pattern, key) {
    if (!(pattern.test(a.value.trim()))) {
        a.style.border = "1px solid red"
        Swal.fire({
            title: "Makhdamch a m3lm!",
            text: "Invalide , réessayer !!!",
            icon: "error"
        },
            y = false,
            x.push(y)
        );
        console.log(pattern);
    } else {
        a.style.border = "1px solid green"
        y = true
        x.push(y)
        console.log(data[key])
        data[key] = a.value
        console.log(a.value);
    }
}
/* <script>
function checkCheckbox() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        text.style.display = "block";
        } else {
            text.style.display = "none";
    }
    }
    </script> */
let exiset = true
let ararrray = []
function validation2() {
    checkedRecoirement(checkBoxesTaille)
    checkedRecoirement(checkBoxesLait)
    checkedRecoirement(checkBoxesSuppléments)
    checkCheckbox(taille1, "Small")
    checkCheckbox(taille2, "Medium")
    checkCheckbox(taille3, "Large")
    checkCheckbox(lait1, "Vache")
    checkCheckbox(lait2, "Avoine")
    checkCheckbox(lait3, "Soja")
    checkCheckbox(lait4, "Amande")
    checkCheckbox(supl1, "Vanille")
    checkCheckbox(supl2, "Caramel")
    checkCheckbox(supl3, "Noisette")
    Température(chaude, "Température")
    Température(glace, "Température")
    fRange(range,"intensite")
    if (ararrray.some(checkVlidation)) {
        ararrray=[]
        Swal.fire({
            title: "Makhdamch lvalidation2 ",
            text: "Invalide , réessayer !!!",
            icon: "error"
        },
        );
        return
    }
        document.querySelector("#stepper3").classList.add("active")
    firstStep.classList.add("hide")
    secondStep.classList.add("hide")
    thirdStep.classList.remove("hide")
    affichage()
}
let checkBoxesTaille = document.querySelectorAll(".input-grp2 > input")
console.log(checkBoxesTaille);
let checkBoxesLait = document.querySelectorAll(".input-grp3 > input")
console.log(checkBoxesLait);
let checkBoxesSuppléments = document.querySelectorAll(".input-grp4 > input")
console.log(checkBoxesSuppléments);

function checkedRecoirement(array) {
    if (!Array.from(array).some(condition)) {
        Swal.fire({
            title: "Makhdamch a sadi9 ",
            text: "jarab chi 7aja akhora mate3raf ?? !!!",
            icon: "error"
        },
        );
        exiset = false
        ararrray.push(exiset)

    } else
        exiset = true
    ararrray.push(exiset)
}

// let data = {
//     Name: null,
//     priice: null,
//     imaage: null,
//     disccount: null,
//     Date: null,
//     Température: null,
//     Small: null,
//     Large: null,
//     Medium: null,
//     Vache: null,
//     Avoine: null,
//     Soja: null,
//     Amande: null,
//     Vanille: null,
//     Caramel: null,
//     Noisette: null,
// }

function checkCheckbox(input, key) {
    if (input.checked == true) {
        let span = input.nextElementSibling
        console.log(span);

        data[key] = span.textContent
        console.log(data[key]);

    } else  data[key] = null
       

}
function condition(checkbox) {
    return checkbox.checked
}
let range = document.querySelector(".form-range-input")

function fRange(range, key) {
    data[key] = range.value
    console.log(data[key]);

}

function Température(input, key) {
    if (input.checked == true) {
        let radio = input.nextElementSibling
        console.log(radio);
        data[key] = radio.textContent
        console.log(data[key]);
    }

}

function affichage() {
    console.log(data);
    Object.keys(data).forEach(element => {
        if (data[element] != null) {
            let box = document.querySelector(`.${element}`)
            console.log(box);
            box.textContent = data[element]
            return
        }
    });
}



