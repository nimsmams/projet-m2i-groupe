/* Dark / Light mode */
const checkbox = document.getElementById("checkbox")

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

checkbox.addEventListener("change", () => {
    if (localStorage.getItem("darkMode") === "true") {
        localStorage.setItem("darkMode", "false")
    }
    else {
        localStorage.setItem("darkMode", "true")
    }
    document.body.classList.toggle("dark")
})