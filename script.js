// validação do formulário

document.getElementById("formContato").addEventListener("submit", function(event){
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    if(nome == "" || email == "" || mensagem == ""){
        alert("Preencha todos os campos");
        return;
    }

    if(!email.includes("@")){
        alert("Email inválido");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    document.getElementById("formContato").reset();
});