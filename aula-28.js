const objeto = [
    {
        nome: 'Lucas',
        idade: 23,
        exibir: true,
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

const pessoas = (pessoa) => {
    return pessoa.idade > 29 || pessoa.nome === 'Pedro';// !! = negação da negação, ou seja, se for true, retorna true, se for false, retorna false.
}

console.log(objeto.filter(pessoas));

// O FILTER RETORNA UM ARRAY QUE ATENDE A CONDIÇÃO PASSADA NO FILTER
// ELE SEMPRE É UM BOOLEANO, ELE SÓ FILTRA SE FOR VERDADEIRO.