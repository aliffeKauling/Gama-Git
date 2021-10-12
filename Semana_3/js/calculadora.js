function somar() {
    n1 = document.getElementById('n1').value;
    n2 = document.getElementById('n2').value;

    let msgError = document.getElementsByClassName('error');
    //validação negada
    if (!validacao(n1, n2)) {

        msgError[0].innerHTML = "Um ou mais campos não foram preenchidos";
    } else {
        resultado = Number.parseFloat(n1) + Number.parseFloat(n2);
        document.getElementById('result_soma').value = resultado;
    }


}

function subtracao() {
    n1 = document.getElementById('n1_sub').value;
    n2 = document.getElementById('n2_sub').value;

    let msgError = document.getElementsByClassName('error');
    //validação negada
    if (!validacao(n1, n2)) {

        msgError[1].innerHTML = "Um ou mais campos não foram preenchidos";
    } else {
        resultado = Number.parseFloat(n1) - Number.parseFloat(n2);
        document.getElementById('result_sub').value = resultado;
    }
}

function multiplicar() {
    n1 = document.getElementById('n1_mul').value;
    n2 = document.getElementById('n2_mul').value;
    let msgError = document.getElementsByClassName('error');
    //validação negada
    if (!validacao(n1, n2)) {

        msgError[2].innerHTML = "Um ou mais campos não foram preenchidos";
    } else {
        resultado = Number.parseFloat(n1) * Number.parseFloat(n2);
        document.getElementById('result_mul').value = resultado;
    }
}

function dividir() {
    n1 = document.getElementById('n1_div').value;
    n2 = document.getElementById('n2_div').value;
    resultado = Number.parseFloat(n1) / Number.parseFloat(n2);
    document.getElementById('result_div').value = resultado;
}

function media() {
    n1 = document.getElementById('n1_med').value;
    n2 = document.getElementById('n2_med').value;
    n3 = document.getElementById('n3_med').value;
    n1 = document.getElementById('n1_mul').value;
    n2 = document.getElementById('n2_mul').value;
    let msgError = document.getElementsByClassName('error');
    //validação negada
    if (!validacaoMedia(n1, n2)) {

        msgError[3].innerHTML = "Um ou mais campos não foram preenchidos";
    } else {
        resultado = (Number.parseFloat(n1) + Number.parseFloat(n2) + Number.parseFloat(n2)) / 3;

        document.getElementById('result_media').value = resultado.toFixed(2);
    }
}

function limpar() {
    input_text = document.getElementsByClassName('form');
    for (i = 0; i < input_text.length; i++) {
        input_text[i].value = "";
    }
}

function limpa_for_each() {
    let inputs_text = document.getElementsByClassName('form');
    //transformando em array para funcinoar for each
    let inputs_array = Array.prototype.slice.call(inputs_text);
    //callback 
    console.log(inputs_text);
    inputs_array.forEach(function(e) {
        console.log(e);
        e.value = "";
    });
}

function validacao(n1, n2) {
    if (n1.trim() === "" || n2.trim() === "") {
        return false;
    } else {
        return true;
    }
}

function validacaoMedia(n1, n2, n3 = null) {
    if ((n1.trim() === "" || n2.trim() === "") || (n3 != null && n3.trim() == "")) {
        return false;
    } else {
        return true;
    }
}

function exemple_loop() {
    let loop = document.getElementById('loop');
    let msg_Loop = "";
    for (i = 0; i < 10; i++) {
        msg_Loop += '<p>' + i + '<10</p>';
    }
    loop.innerHTML = msg_Loop;
}

function example_while() {
    let loop = document.getElementById('loop');
    let msg_Loop = "";
    i = 0;
    validate = true;
    do {
        msg_Loop += '<p>' + i + '<10</p>';
        if (i + 1 < 10) {
            i++;
        } else {
            validate = false;
        }
    } while (validate) {
        loop.innerHTML = msg_Loop;
    }
}