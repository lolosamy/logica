function calcularMedia(nota1, nota2, nota3, usuario) {
    const media = (nota1 + nota2 + nota3) / 3;
    return {
        usuario: usuario,
        media: media
    };
}

// Exemplo de uso
const nota1 = 9; // Nota da primeira prova
const nota2 = 6; // Nota da segunda prova
const nota3 = 8; // Nota do trabalho
const usuario = "seuNomeDeUsuario";

const resultado = calcularMedia(nota1, nota2, nota3, usuario);
console.log(`Usuário: ${resultado.usuario}, Média: ${resultado.media.toFixed(2)}`);


