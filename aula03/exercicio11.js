const prompt = require("prompt-sync")();
let valordolitro = Number(prompt ("digite o precodocombustivel"));
let distancia = Number (prompt ("digite a distancia"));
let consumo = Number (prompt ("digite o consumo"));
let litros = distancia/ consumo;
let custo = litros * valordolitro;
console.log ("voce precisara abastecer " + litros );
console.log ("custo total da viagem é" + custo);

