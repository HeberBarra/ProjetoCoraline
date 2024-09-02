"use strict";
const botaoMenu = document.querySelector("header button");
const menuLateral = document.querySelector("nav");
if (botaoMenu != null && menuLateral != null) {
    botaoMenu.addEventListener("click", () => {
        if (menuLateral.style.display == "none" || menuLateral.style.display == "") {
            menuLateral.style.display = "block";
            return;
        }
        menuLateral.style.display = "none";
    });
}
