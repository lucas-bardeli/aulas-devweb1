
$('#cep').on('blur', function() {
    let cep = $('#cep').val().replace(/\D/g, '');

    if (cep.length === 8) {
        $.ajax({
            url: `https://viacep.com.br/ws/${cep}/json/`,
            type: 'GET',
            dataType: 'json',
            success: function(retorno) {
                if (retorno.erro) {
                    alert(retorno.erro);
                }
                else {
                    $('#rua').val(retorno.logradouro);
                    $('#bairro').val(retorno.bairro);
                    $('#cidade').val(retorno.localidade);
                    $('#estado').val(retorno.uf);
                }
            },
            error: function() {}
        });
    }
    else {
        alert('O CEP deve ter 8 dígitos!');
    }
});