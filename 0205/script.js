function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado(4);
areaQuadrado(5);
areaQuadrado(2);

console.log(areaQuadrado(4));
console.log(areaQuadrado(5));
console.log(areaQuadrado(2));

// parâmetros são definidos na função, e argumentos são passados durante a execução da função. .

function imc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc;
}

console.log(imc(77.7, 1.67));
console.log(imc(67, 1.67));

function corFavorita(cor) {
    if (cor === "azul") {
        return "Eu gosto do céu";
    } else if (cor === "verde") {
        return "Eu gosto de mato";
    } else {
        return "Eu não gosto de cores";
    }
}

console.log(corFavorita("verde"));

addEventListener("click", function () {
    console.log("Oi");
});

function mostraConsole() {
    console.log("Clicked");
}

addEventListener("click", mostraConsole);
