
/*
Meu primeiro programa JavaScript
*/

var mensagem = "Olá Mundo!"; 
//alert(mensagem); // bota uma mensagem pop up na janela
//console.log(mensagem); // bota uma mensagem no console do navegador

function botao(){
    alert("Alerta do botão!")
}

function mudaCor(cor){
    var elemento = document.getElementById("mensagemJava");
    elemento.style.color = cor;
}

function valida(){
    var nome = document.getElementById('nome');
    var senha = document.getElementById('senha');

    if (nome.value == ""){
        alert("Campo Nome é obrigatório!")
    }
    if (senha.value == "") {
        alert("Campo Senha é obrigatório!")
    }
    if (nome.value != "" && senha.value != ""){
        alert("Formulário enviado com sucesso!");
    }
}