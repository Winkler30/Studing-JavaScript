const CONSUMO_CARRO = 12;

function gastoDeCombustivel (velocidadeMedia,tempoGasto){
    const distancia = velocidadeMedia * tempoGasto;
    const consumo = distancia / CONSUMO_CARRO;

    return consumo.toFixed(3);
}

console.log(gastoDeCombustivel(10,85));
console.log(gastoDeCombustivel(2,92));
console.log(gastoDeCombustivel(22,97));