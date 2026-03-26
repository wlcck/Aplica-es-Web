// 1) Ímpares de 1 a 10
function mostrarImpares() {
    let resultado = "";

    for (let i = 1; i <= 10; i++) {
        if (i % 2 != 0) {
            resultado = resultado + i + " ";
        }
    }

    alert("Ímpares: " + resultado);
}


// 2) Soma de 1 até 100
function somarAte100() {
    let soma = 0;

    for (let i = 1; i <= 100; i++) {
        soma = soma + i;
    }

    alert("Soma: " + soma);
}


// 3) Nome e idade
function mostrarNomeIdade() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    alert(nome + " tem " + idade + " anos");
}


// 4 e 5) Soma + mudar cor
function somarValores() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    valor1 = Number(valor1);
    valor2 = Number(valor2);

    let soma = valor1 + valor2;

    alert("Resultado: " + soma);

    let botao = document.getElementById("botaoSoma");

    if (soma % 2 == 0) {
        botao.style.backgroundColor = "blue";
    } else {
        botao.style.backgroundColor = "green";
    }
}


// 6) Tabuada
function mostrarTabuada() {
    let numero = document.getElementById("numeroTabuada").value;
    numero = Number(numero);

    if (numero < 1 || numero > 10) {
        alert("Digite um número de 1 a 10");
        return;
    }

    let resultado = "";

    for (let i = 1; i <= 10; i++) {
        resultado = resultado + numero + " x " + i + " = " + (numero * i) + "\n";
    }

    alert(resultado);
}


// 7) Número aleatório
function gerarNumero() {
    let numero = Math.floor(Math.random() * 100) + 1;

    alert("Número gerado: " + numero);
}