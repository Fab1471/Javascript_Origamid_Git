var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiGraduacao) {
    console.log("É verdadeiro");
} else {
    console.log("É falso");
}

if (possuiDoutorado) {
    console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
    console.log("Possui graduação, mas não possui doutorado");
} else {
    console.log("Não possui graduação");
}

// Falsy

/*

if (false)
if (0) // ou -0
if (NaN)
if (null)
if (undefined)
if ('') // ou "" ou ``

*/

if (!possuiGraduacao) {
    console.log("Não possui graduação");
} else {
    console.log("Nada a declarar. .");
}

// !! verificam se a variável é verdadeira ou falsa. .

var x = "10";

console.log(x == 10);
console.log(x === 10);

var condicional = 5 - 10 && 5 + 5;
if (condicional) {
    console.log("Verdadeiro", condicional);
} else {
    console.log("Falso", condicional);
}

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional2);

var corFavorita = "Verde";

switch (corFavorita) {
    case "Azul":
        console.log("Olhe para o céu");
        break;
    case "Amarelo":
        console.log("Olhe para o sol");
        break;
    case "Verde":
        console.log("Olhe para a floresta");
        break;
    default:
        console.log("Feche os olhos");
}
