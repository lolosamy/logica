const prompt = require('prompt-sync')();
let anos = prompt ("digite quantos anos foram trabalhar)");
let meses = prompt ("digite quantos meses foram necessarios");

anos = Number(anos);
meses = Number (meses);
let anomeses = anos * 12;
let resultado = anomeses + meses ;
console.log(resultado + "meses trabalhados !");
1