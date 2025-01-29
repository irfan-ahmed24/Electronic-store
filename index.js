var menu = document.getElementById("menu");
var nav3 = document.getElementById("nav3");
var dropdown = document.getElementById("dropdown");
var down = document.getElementById("down");
var dropdown_menu = document.getElementById("dropdown-content");
var img = document.getElementById("img");
var cart = document.getElementsByClassName("fa-basket-shopping");

menu.addEventListener("click", function () {
    nav3.classList = nav3.classList.contains("hide") ? "nav3 show" : "hide";
})

dropdown.addEventListener("click", function () {
    dropdown_menu.classList = dropdown_menu.classList.contains("hide-ul") ? "dropdown-content show-ul" : "hide-ul";
})
down.addEventListener("click", function () {
    dropdown_menu.classList = dropdown_menu.classList.contains("hide-ul") ? "dropdown-content show-ul" : "hide-ul";
})