function somar() {
    n1 = document.getElementById('n1').value;
    n2 = document.getElementById('n2').value;
    resultado = Number.parseFloat(n1) + Number.parseFloat(n2);
    document.getElementById('result_soma').value = resultado;
}

function subtracao() {
    n1 = document.getElementById('n1_sub').value;
    n2 = document.getElementById('n2_sub').value;
    resultado = Number.parseFloat(n1) - Number.parseFloat(n2);
    document.getElementById('result_sub').value = resultado;
}

function multiplicar() {
    n1 = document.getElementById('n1_mul').value;
    n2 = document.getElementById('n2_mul').value;
    resultado = Number.parseFloat(n1) * Number.parseFloat(n2);
    document.getElementById('result_mul').value = resultado;
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
    resultado = (Number.parseFloat(n1) + Number.parseFloat(n2) + Number.parseFloat(n2)) / 3;

    document.getElementById('result_media').value = resultado.toFixed(2);
}

function limpar() {
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
    document.getElementById('result_soma').value = "";
}