var menuButton = document.getElementById("menuButton")
var menu = document.getElementById("menu")
var closemenu = document.getElementById("closemenu")
var header = document.getElementsByTagName("header")[0]

menuButton.addEventListener("click",showMenu)
closemenu.addEventListener("click",closeMenu)

function showMenu(){
    header.style.display = "flex"
    header.style.flexWrap = "nowrap"
    header.style.flexFlow = "column"
    menuButton.style.display = "none"
    menu.style.display = "flex"
}

function closeMenu(){
    header.style.display = "flex"
    header.style.flexWrap = "nowrap"
    header.style.flexFlow = "row"
    header.style.display = "flex"
    menuButton.style.display = "flex"
    menu.style.display = "none"
}