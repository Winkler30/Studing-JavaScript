class Pessoa {
  nome;
  idade;
  filhos;

  quantosFilhos() {
    if (this.filhos) {
      return this.filhos.length;
    }
    return 0;
  }

  // O CONSTRUCTOR É UM METODO ESPECIAL QUE É CHAMADO NO MOMENTO DA CRIAÇÃO DO OBJETO
  constructor(nome, idade, filhos) {
    // O THIS REFERENCIA A CLASSE PESSOA
    this.idade = idade;
    this.nome = nome;
    this.filhos = filhos;
  }
}

const filho1 = new Pessoa("Julio", 10);
const filho2 = new Pessoa("Gabriela", 15);
const pessoa = new Pessoa("José", 50, [filho1, filho2]);

console.log(pessoa);
console.log("Filho1 tem: ", filho1.quantosFilhos());
console.log("Quantos filhos? ", pessoa.quantosFilhos());

// pessoa.filhos = []; // FORÇOU A MODIFICAR O ARRAY DO OBJETO PESSOA,
// PODE SER ATÉ UM ERRO DE SEGURANÇA
