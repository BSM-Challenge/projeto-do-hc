alert("Antes de começarmos, precisamos de algumas informações.");
// Pegando o nome do usuário
const nome = prompt("Qual é o seu nome?");
const user = document.querySelector("#user").innerHTML = `Olá, ${nome}`;

// Abrir e fechar o menu
const botaoMenu = document.querySelector("#logo__menu");
const logoHC = document.querySelector("#logo__hc");
const links = document.querySelectorAll(".text__link");
const icons = document.querySelectorAll(".icons");
const header = document.querySelector("header");
const main = document.querySelector("main");

botaoMenu.addEventListener("click", () => {
    // Alterna a visibilidade da logo
    logoHC.style.display = logoHC.style.display === "none" ? "block" : "none";

    // Alterna a visibilidade dos links
    links.forEach(link => {
        link.style.display = link.style.display === "none" ? "block" : "none";
    });

    // Centraliza os ícones
    icons.forEach(icon => {
        if (links[0].style.display === "none") {
            icon.style.display = "flex";
            icon.style.justifyContent = "center";
            botaoMenu.style.margin = "2rem 1.6rem 0 0";
            icon.style.width = "44px";
        } else {
            icon.style.margin = "";
            icon.style.display = "";
            icon.style.justifyContent = "";
            icon.style.width = "";
        }
    });

    // Reduz a largura do header quando os links estão ocultos
    if (links[0].style.display === "none") {
        header.style.width = "6%"; // Largura reduzida
    } else {
        header.style.width = "16%"; // Volta ao tamanho original
    }
    
    // Reduz a largura do main quando os links do Header estão ocultos
    if (links[0].style.display === "none") {
        main.style.marginLeft = "8%"; // Largura reduzida
        main.style.width = "90%"; 
    } else {
        main.style.marginLeft = "18%"; // Volta ao tamanho original
        main.style.width = "81%";
    }
});