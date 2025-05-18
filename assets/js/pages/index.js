alert("Antes de começarmos, precisamos de algumas informações."); 
// // Pegando o nome do usuário
const nome = prompt("Qual é o seu nome?");
const user = document.querySelector("#user").innerHTML = `Olá, ${nome}`;

// Abrir e fechar o menu
const botaoMenu = document.querySelector("#logo__menu");
const botaoFechar = document.querySelector("#logo__menu__fechado");
const logoHC = document.querySelector("#logo__hc");
const links = document.querySelectorAll(".text__link");
const icons = document.querySelectorAll(".icons");
const header = document.querySelector("header");
const main = document.querySelector("main");

function alternarMenu() {
    const menuVisivel = getComputedStyle(botaoMenu).display !== "none";

    // Alternar os botões de menu
    botaoMenu.style.display = menuVisivel ? "none" : "block";
    botaoFechar.style.display = menuVisivel ? "block" : "none";

    // Alternar visibilidade do logo HC
    logoHC.style.display = (logoHC.style.display === "none") ? "block" : "none";

    // Alternar visibilidade dos links
    links.forEach(link => {
        link.style.display = (link.style.display === "none") ? "block" : "none";
    });

    // Centralizar ou restaurar ícones
    icons.forEach(icon => {
        if (links[0].style.display === "none") {
            icon.style.display = "flex";
            icon.style.justifyContent = "center";
            icon.style.width = "44px";
            botaoFechar.style.margin = "2rem 1.6rem 0 0";
        } else {
            icon.style.display = "";
            icon.style.justifyContent = "";
            icon.style.width = "";
            botaoFechar.style.margin = "";
        }
    });

    // Ajustar tamanho do header
    header.style.width = (links[0].style.display === "none") ? "6%" : "16%";

    // Ajustar tamanho e margem do main
    if (links[0].style.display === "none") {
        main.style.marginLeft = "8%";
        main.style.width = "90%";
    } else {
        main.style.marginLeft = "18%";
        main.style.width = "81%";
    }
}

// Adiciona eventos para os dois botões
botaoMenu.addEventListener("click", alternarMenu);
botaoFechar.addEventListener("click", alternarMenu);
