const prompt = require("prompt-sync")();
let nota1 = Number (prompt (" digite a primeira nota"))
let nota2 = Number (prompt ("digite a segunda nota: "));
let media = (nota1 + nota2)/2
let notafinal = (nota1 >= nota2);
console.log(notafinal);

