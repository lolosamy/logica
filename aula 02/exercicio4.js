function calcularArea(largura, profundidade) {
    const area = largura * profundidade;
    return area; // Retorna a área em m²
}

// Exemplo de uso
const largura = 45; // largura em metros
const profundidade = 17; // profundidade em metros

const resultado = calcularArea(largura, profundidade);
console.log(`A área do terreno é: ${resultado} m²`);
