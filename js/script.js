// Declarando variaveis

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

// Evento no JavaScript
button.addEventListener('click', (event) => {
    event.preventDefault();
    const inputNameValue = nome.value;
    const inputEmailValue = email.value;
    const inputTelefoneValue = telefone.value; 
    const templateHTML = `
    <li class="value"> 
        <h1> Cadastro </h1> 
        <p> Nome: </p> ${inputNameValue}
        <p> Email: </p>${inputEmailValue}
        <p> Telefone: </p>${inputTelefoneValue}
        <br>
        <button class="excluir">Excluir</button>
    </li>`;

    // Condição
    if(inputNameValue === '' || inputEmailValue === '' || inputTelefoneValue === ''){
        alert("Escreva novamente ");
        return false;
    }

    // Incluindo itens no HTML

    lista.innerHTML += templateHTML;

    // Limpando o meu campo 
    nome.value = "";
    email.value = "";
    telefone.value = "";

    const excluirButtons = lista.querySelectorAll('.excluir');
    excluirButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.target.parentNode.remove();
        });
    });
})