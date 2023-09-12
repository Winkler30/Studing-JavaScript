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

const converterObjeto = (objeto) => {
    return {
        // idade: objeto.idade,
        // nome: objeto.nome,
        ...objeto, // SPREAD OPERATOR -> PEGA TODAS AS PROPRIEDADES DO OBJETO E JOGA DENTRO DO NOVO OBJETO
        nomeIdade: `${objeto.nome} tem ${objeto.idade} anos`
    }
}

console.log(objeto,'\n');
console.log(objeto.map(converterObjeto));
// O .MAP CONVERTE UMA LISTA EM OUTRA LISTA, COM AQUILO QUE PEDI PARA SER CONVERTIDO
// NESSE CASO, EU PEDI PARA CONVERTER O OBJETO EM UMA LISTA DE IDADES

// ISSO É MUITO USADO PORQUE QUANDO CHEGA ALGO DO BACK END, E NOS QUEREMOS DEVOLVER 
// PARA O USUARIO DE UMA FORMA DIFERENTE.

// CONVERTER UMA LISTA DE OBJETO PARA UM OUTRO OBJETO.