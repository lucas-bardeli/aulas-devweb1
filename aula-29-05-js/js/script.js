
const form = document.getElementById('form')

document.getElementsByTagName('h1')[0].addEventListener('mouseover', (event) => {
    event.target.style.color = '#00f';
});

document.getElementsByTagName('h1')[0].addEventListener('mouseout', function(event) {
    event.target.style.color = '#000';
});

document.getElementById('nome').addEventListener('blur', function() {
    if (this.value.trim() === '') {
        this.style.backgroundColor = '#e8cc5c7';
        this.style.borderColor = 'yellow';
    }
    else if (this.value.trim().length < 3) {
        this.style.backgroundColor = '#e8cc5c7';
        this.style.borderColor = '#f00';
        alert('O campo deve ter pelo menos 3 caracteres!');
    }
    else {
        this.style.backgroundColor = '#fff';
        this.style.borderColor = '#0f0';
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    if (document.getElementById('cep').value.trim() === '') {
        alert('O campo cep é obrigatório!');
        document.getElementById('cep').style.backgroundColor = '#e8cc5c7';
        document.getElementById('cep').style.borderColor = 'red';
    }
    else {
        form.submit();
        document.getElementById('cepText').innerHTML = `<b>CEP: </b> ${document.getElementById('cep').value}`;
    }
});