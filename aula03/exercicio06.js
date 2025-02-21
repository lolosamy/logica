const prompt = require("prompt-sync")();
let nome = prompt ("digite seu nome:");
let idade = prompt ("fale qual a sua idade:");
idade = Number (idade);
console.log("voce é" + nome + " e tem" + idade + "anos de idade");
 
