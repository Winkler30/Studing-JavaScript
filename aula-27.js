const objeto = [
    {
        nome: 'Lucas',
        idade: 23,
    },
    {
        nome: 'João',
        idade: 15,
    },
    {
        nome: 'Maria',
        idade: 30,
    },
    {
        nome: 'José',
        idade: 25,
    },
    {
        nome: 'Paulo',
        idade: 18,
    },
    {
        nome: 'Pedro',
        idade: 27,
    }
];

// for(let i = 0; i< objeto.length; i++){
//     console.log(objeto[i].nome)
// }
soma = 0;

const somaIdade = (objeto) => {// É MELHOR CRIAR FUNÇÕES, SE NÃO TEMOS FUNÇÕES ANONIMAS
    soma += objeto.idade;
}
objeto.forEach(somaIdade);

console.log(soma)

// O FOR EACH É UMA SIMPLIFICAÇÃO DO FOR,
// ELE PERCORRE O ARRAY E EXECUTA UMA FUNÇÃO PARA CADA ITEM DO ARRAY