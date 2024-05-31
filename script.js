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