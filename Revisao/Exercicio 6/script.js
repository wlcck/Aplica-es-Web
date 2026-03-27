function exibirTabuada() {
    var numero = parseInt(document.getElementById("numero").value);
    var tabuada = "";
    for (var i = 1; i <= 10; i++) {
        tabuada += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    alert("Tabuada de " + numero + ":\n" + tabuada);
}
