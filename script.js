/* Dark / Light mode */
const checkbox = document.getElementById("checkbox")    // definir l'element

// Verifier si une valuer existe dans le stocakge "local" et definir le mode sombre en consequence
if (localStorage.getItem("darkMode") === undefined) {
    localStorage.setItem("darkMode", "false")
}
else if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark")
    checkbox.checked = true
}
else if (!localStorage.getItem("darkMode") === "false") {
    document.body.classList.remove("dark")
}

// Changer le mode lorsque le "checkbox" est clique
checkbox.addEventListener("change", () => {
    if (localStorage.getItem("darkMode") === "true") {
        localStorage.setItem("darkMode", "false")
    }
    else {
        localStorage.setItem("darkMode", "true")
    }
    document.body.classList.toggle("dark")
})

/* Copyright annee */
const dateYear = document.getElementById("dateYear")
const year = new Date().getFullYear()

dateYear.textContent = year




// Gestion de la galery img
const galeryDiv = document.getElementById('galery').children
//console.log(galeryDiv)
const galDivs = Array.from(galeryDiv)

const btnTous = document.querySelectorAll('button')[0]
const btnDog = document.querySelectorAll('button')[1]
const btnReptiles = document.querySelectorAll('button')[2]

const btnBirds = document.querySelectorAll('button')[3]
const btnFelins = document.querySelectorAll('button')[4]

//console.log(galeryDiv[0].dataset.attr)

function filter(mot){
    galDivs.map(item => {
        if (mot === 'tous') {
            item.classList.remove('myClass')
            return
        }
        if (item.dataset.attr === mot) {
            item.classList.remove('myClass') // fait appraitre les cards
        }
        else {
            item.classList.add('myClass') // disparaitre les cards
        }
    })
}

btnTous.addEventListener('click', (e) => {
    filter("tous")
})
btnDog.addEventListener('click', (e) => {
    filter("dog")
})
btnReptiles.addEventListener('click', (e) => {
    filter("reptiles")
})

btnBirds.addEventListener('click', (e) => {
    filter("birds")
})
btnFelins.addEventListener('click', (e) => {
    filter("felins")
})


// menu nav 

const burger = document.querySelector("#menu");
const menu = document.getElementById("nav-ul");
const retrait=document.querySelector(".retrait");

burger.addEventListener("click", appear);
function appear(){
    menu.classList.toggle("retrait");
}
appear();