// burger menu

let _burger_menu = document.querySelector("#burger_menu")
_burger_menu.addEventListener("click", function() {
    this.classList.toggle("active")

let _nav = this.previousElementSibling
    toggleDisplay(_nav)
})

// accordions

let _accordionsList = document.querySelectorAll(".accordion")
_accordionsList.forEach(element => element.addEventListener("click", function() {
    let _accordion_active = document.querySelector(".accordion.active")

    let _panelDeployed = _accordion_active.nextElementSibling
    _accordion_active.classList.toggle("active")
    _panelDeployed.classList.toggle("active")
    
    this.classList.toggle("active")
    let _panel = this.nextElementSibling
    _panel.classList.toggle("active")

}))

// gallery filter

let _filter_button = document.querySelectorAll(".filter_button")
_filter_button.forEach(element => element.addEventListener("click", function() {
    let _filter_button_active = document.querySelector(".filter_button.active")
    _filter_button_active.classList.toggle("active")
    this.classList.toggle("active")
    filterSelection(this.dataset.selection)
}))

let _toFilter = document.querySelectorAll(".toFilter")

_toFilter.forEach(element => element.addEventListener("mouseover", function(){
    let _figcaption = element.lastElementChild
    _figcaption.classList.toggle("active")

    // on fait disparaître le figcaption après quelques instants
    setTimeout(function() {
        _figcaption.classList.toggle("active")
    }, 1000)
}))

function filterSelection(dataType) {
    _toFilter.forEach(element => {
        if (dataType == "all" || element.dataset.type == dataType) {
            element.classList.remove("hide")
        } else {
            element.classList.add("hide")
        }
    })
}

// scrollback

let _angle_up = document.querySelector("#angle_up")
let myTop = document.querySelector("body")
_angle_up.addEventListener("click", function() {
    myTop.scrollIntoView({behavior: "smooth", block: "start"})
})

// theme

let themeStyles = ["style1.css", "style2.css", "style3.css"]

_themeChanger = document.querySelector("#logo")

_themeChanger.addEventListener("click", function() {
    let _pageStyle = document.querySelector("#page-style")
    let currentThemeStyleIndex = themeStyles.indexOf(_pageStyle.attributes.href.value)
    _pageStyle.setAttribute("href", themeStyles[(currentThemeStyleIndex+1)%themeStyles.length])
})

/* function to toggle between hiding and showing an element */

function toggleDisplay(element) {
    if (element.style.display === "block") {
        element.style.display = "none"
    } else {
        element.style.display = "block"
    }
}