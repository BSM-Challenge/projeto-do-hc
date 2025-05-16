alert("Antes de começarmos, precisamos de algumas informações.");
nome = prompt("Qual é o seu nome?");
user = document.querySelector("#user").innerHTML = `Olá, ${nome}`;