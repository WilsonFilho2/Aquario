//Criando variáveis

let altura = document.getElementById("altura");
let largura = document.getElementById("largura");
let comprimento = document.getElementById("comprimento");
let button = document.getElementById("button");
let volume = document.getElementById("volume");
let aquecedor = document.getElementById("aquecedor");
let litro_hora = document.getElementById("litro-hora");

//Definindo evento
button.addEventListener("click", calcular);

//Criando Função

function calcular () {
    //Volume

    let altura_v = parseFloat(altura.value);
    let largura_v = parseFloat(largura.value);
    let comprimento_v = parseFloat(comprimento.value);
    volume.innerHTML = `Volume: ${altura_v * largura_v * comprimento_v / 1000}L`;


    //Aquecedor
}
