import cipher from './cipher.js';

const botao1 = document.getElementById("botao1");

function criptarMensagem(){
    let chaveDesloc = Number(document.getElementById("chaveDesloc").value); 
    const cifrando = cipher.encode(chaveDesloc, cifrarTxt); 
    document.getElementById("caixa-de-texto-decifrar").value = cifrando; 
}

botao1.addEventListener("click", criptarMensagem);

const botao2 = document.getElementById("botao2"); 

function decifrarMensagem(){ 
    let chaveDesloc = Number(document.getElementById("chaveDesloc").value);
    let decifrarTxt = document.getElementById("caixa-de-texto-decifrar").value;
    const decifrando = cipher.decode(chaveDesloc, decifrarTxt);
    document.getElementById("caixa-de-texto-cifrar").value = decifrando;
}
botao2.addEventListener("click", decifrarMensagem);
















