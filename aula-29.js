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

const buscarPessoa = (pessoa) => pessoa.nome === 'Lucas'


const novaPessoa = objeto.find(buscarPessoa);

console.log(novaPessoa);

// O FIND ELE RETONA O PRIMEIRO ELEMENTO QUE ELE ENCONTRAR