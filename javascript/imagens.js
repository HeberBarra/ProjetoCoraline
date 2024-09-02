"use strict";
const containersImagens = document.querySelectorAll(".container-imagem:not(:has(a))");
if (matchMedia("(min-width: 600px)").matches) {
    containersImagens.forEach((container) => {
        container.addEventListener("click", () => {
            if (container.classList.contains("expansao-imagem")) {
                container.classList.remove("expansao-imagem");
                container.title = "Clique para expandir";
                return;
            }
            container.classList.add("expansao-imagem");
            container.title = "Clique para fechar";
        });
        container.title = "Clique para expandir";
    });
}
