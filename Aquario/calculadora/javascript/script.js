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
    if (parseFloat(altura.value.length) != 0 && parseFloat(comprimento.value.length) != 0 && parseFloat(largura.value.length) != 0){ //Se nem todos os inputs receberem valores, o site trava :(
        //Volume
        let altura_v = Math.abs(parseFloat(altura.value));
        let largura_v = Math.abs(parseFloat(largura.value));
        let comprimento_v = Math.abs(parseFloat(comprimento.value));

        comprimento.value = ""; altura.value = ""; largura.value = "";
        
        let volume_v =  altura_v * largura_v * comprimento_v / 1000
        volume.innerHTML = `Volume: ${volume_v}L`;


        //Aquecedor
        let i = 0;
        let a = 50;
    
        while (true){
            i += 1;
            if (a*i >= volume_v){
                aquecedor.innerHTML = `Aquecedor: ${a*i}W`;
                break;
            }
        }
        //Bomba

        litro_hora.innerHTML = `Litro/Hora: ${(volume_v * 6).toFixed(2)}L/H`;

        altura.style.borderBottom = "1px solid #060a18";
        comprimento.style.borderBottom = "1px solid #060a18";
        largura.style.borderBottom = "1px solid #060a18";

    }
    else {
        if (parseFloat(altura.value.length) == 0){
            alert("Está Faltando a altura do aquário");
            altura.style.borderBottom = "1px solid red";
            comprimento.style.borderBottom = "1px solid #060a18";
            largura.style.borderBottom = "1px solid #060a18";
        }
        else if (parseFloat(largura.value.length) == 0){
            alert("Está faltando a largura do aquário");
            largura.style.borderBottom = "1px solid red";
            comprimento.style.borderBottom = "1px solid #060a18";
            altura.style.borderBottom = "1px solid #060a18";
        }
        else if (parseFloat(comprimento.value.length) == 0){
            alert("Está faltando o comprimento do aquário");
            comprimento.style.borderBottom = "1px solid red";
            altura.style.borderBottom = "1px solid #060a18";
            largura.style.borderBottom = "1px solid #060a18";
        }
    }
}
