const prompt = require('prompt-sync')();
let valor1 = prompt ("digite a quantidade de convidados: ");
let numero1 = Number(valor1);
let n2 = numero1 * 0.4;
let valordokg = 41.90 ;
let p2 = valordokg * n2;
console.log (" o valor gasto para o churrasco sera de " + p2 + "reais");

