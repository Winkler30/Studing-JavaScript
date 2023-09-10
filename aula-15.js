//Olympiad
process.stdin.setEncoding('utf8');

let maiorString = '';
let resultado = [];

function contarCaracteres(valor) {
    const palavras = valor.trim().split(' ');
    const tamanhos = palavras.map(word => word.length);
    const palavraMaisLonga = palavras[tamanhos.indexOf(Math.max(...tamanhos))];

    return tamanhos.join('-') + '\n' + palavraMaisLonga;
}

process.stdin.on('data', function(data) {
    if (data.trim() === '0') {
        resultado.forEach(item => console.log(item));
        console.log(`A maior palavra: ${maiorString}`);
        process.stdin.pause();
    } else {
        resultado.push(contarCaracteres(data));
    }
});
