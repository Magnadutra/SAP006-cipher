import cipher from './cipher.js';

//console.log(cipher); /* O DOM SERÁ APLICADO AQUI*/

const botao1 = document.getElementById("botao1");

function criptarMensagem(){
    let chaveDesloc = Number(document.getElementById("chaveDesloc").value); //RESGATANDO O VALOR DO id CHAVE DE DESLOCAMENTO TRANSFORMANDO EM NUMERO
    let cifrarTxt = document.getElementById("caixa-de-texto-cifrar").value; //CIFRAR LETRAS MAIUSCULAS
    const cifrando = cipher.encode(chaveDesloc, cifrarTxt); //FORMULA DO DANIEL
    document.getElementById("caixa-de-texto-decifrar").value = cifrando; //RESULTADO DA FORMULA
}

botao1.addEventListener("click", criptarMensagem);

const botao2 = document.getElementById("botao2"); //DAR A FUNÇÃO DE CLICAR

function decifrarMensagem(){ //SÓ MUDA OS NOMES DAS VARIAVEIS
    let chaveDesloc = Number(document.getElementById("chaveDesloc").value);
    let decifrarTxt = document.getElementById("caixa-de-texto-decifrar").value;
    const decifrando = cipher.decode(chaveDesloc, decifrarTxt);
    document.getElementById("caixa-de-texto-cifrar").value = decifrando;
}
botao2.addEventListener("click", decifrarMensagem);
















