
const form = document.getElementById('form');
const nome = document.getElementById('nome');
const nomeText = document.getElementById('nomeText');
const cep = document.getElementById('cep');
const cepText = document.getElementById('cepText');
const rua = document.getElementById('rua');
const ruaText = document.getElementById('ruaText');
const numero = document.getElementById('numero');
const numeroText = document.getElementById('numeroText');
const bairro = document.getElementById('bairro');
const bairroText = document.getElementById('bairroText');
const cidade = document.getElementById('cidade');
const cidadeText = document.getElementById('cidadeText');
const estado = document.getElementById('estado');
const estadoText = document.getElementById('estadoText');

document.getElementsByTagName('h1')[0].addEventListener('mouseover', (event) => {
    event.target.style.color = '#00f';
});

document.getElementsByTagName('h1')[0].addEventListener('mouseout', function(event) {
    event.target.style.color = '#000';
});

nome.addEventListener('blur', function() {
    if (this.value.trim() === '') {
        this.style.borderColor = 'yellow';
    }
    else if (this.value.trim().length < 3) {
        this.style.borderColor = '#f00';
        alert('O campo Nome deve ter pelo menos 3 caracteres!');
    }
    else {
        this.style.backgroundColor = '#fff';
        this.style.borderColor = '#0f0';
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    if ((nome.value.trim() === '') || (nome.value.trim().length < 3)) {
        nome.style.borderColor = 'red';
    }
    else {
        nomeText.innerHTML = `<b>Nome: </b> ${nome.value}`;
    }

    if (cep.value.trim() === '') {
        alert('O campo CEP é obrigatório!');
        cep.style.borderColor = 'red';
    }
    else if (cep.value.trim().length < 8) {
        alert('O campo CEP deve ter pelo menos 8 caracteres!');
        cep.style.borderColor = 'red';
    }
    else {
        cep.style.borderColor = '#0f0';
        cepText.innerHTML = `<b>CEP: </b> ${cep.value}`;
    }

    if (rua.value.trim() === '') {
        rua.style.borderColor = 'red';
    }
    else {
        rua.style.borderColor = '#0f0';
        ruaText.innerHTML = `<b>Rua: </b> ${rua.value}`;
    }

    if (numero.value.trim() === '') {
        numero.style.borderColor = 'red';
    }
    else {
        numero.style.borderColor = '#0f0';
        numeroText.innerHTML = `<b>Número: </b> ${numero.value}`;
    }

    if (bairro.value.trim() === '') {
        bairro.style.borderColor = 'red';
    }
    else {
        bairro.style.borderColor = '#0f0';
        bairroText.innerHTML = `<b>Bairro: </b> ${bairro.value}`;
    }

    if (cidade.value.trim() === '') {
        cidade.style.borderColor = 'red';
    }
    else {
        cidade.style.borderColor = '#0f0';
        cidadeText.innerHTML = `<b>Cidade: </b> ${cidade.value}`;
    }

    if (estado.value.trim() === '') {
        estado.style.borderColor = 'red';
    }
    else {
        estado.style.borderColor = '#0f0';
        estadoText.innerHTML = `<b>Estado: </b> ${estado.value}`;
    }
});