const rickAndmorty = "https://rickandmortyapi.com/api/character";

let listaDePersonagens = document.getElementById("personagens")

function convertePersonagemParaLi(personagem) {
    return`
        <li class="personagem" id="${personagem.id}">
            <h3>Name: ${personagem.name}</h3>
            <p>Status: ${personagem.status}</p>
            <p>Gender: ${personagem.gender}</p>
            <p>Species: ${personagem.species}</p>
            <img src="${personagem.image}" alt="Foto do Personagem">
        </li>
    `
};

fetch(rickAndmorty)
    .then((response) => response.json())
    .then((jsonResponse) => jsonResponse.results)
    .then((results) => listaDePersonagens.innerHTML = results.map(convertePersonagemParaLi).join(""))
    .catch((error) => console.log(error));