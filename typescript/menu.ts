const botaoMenu: HTMLButtonElement | null = document.querySelector("header button")
const menuLateral: HTMLElement | null = document.querySelector("nav");

if (botaoMenu != null && menuLateral != null) {
    botaoMenu.addEventListener("click", () => {
        if (menuLateral.style.display == "none" || menuLateral.style.display == "") {
            menuLateral.style.display = "block";
            return
        }

        menuLateral.style.display = "none";
    })
}
