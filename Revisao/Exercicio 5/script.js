function mostrarSoma() {
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    var soma = num1 + num2;

    alert("A soma dos números é: " + soma);

    var botao = document.getElementById("botao");
    if (soma % 2 === 0) {
        botao.style.backgroundColor = "blue";
    } else {
        botao.style.backgroundColor = "green";
    }
}
