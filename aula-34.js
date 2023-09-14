const lista = [
    {
      nome: "Jose",
      idade: 13,
      cartoes: ['2331','2332','2333'],
    },
    {
      nome: "Joao",
      idade: 42,
      cartoes: ['2153','2342'],
    },
    {
      nome: "Maria",
      idade: 23,
      cartoes: ['2342','2342'],
    },
    {
      nome: "Gabriela",
      idade: 25,
      cartoes: ['2342','2342'],
    },
    {
      nome: "Fernanda",
      idade: 65,
      cartoes: ['2342','2342'],
    },
    {
      nome: "André",
      idade: 69,
      cartoes: ['2342','2342'],
    },
    {
      nome: "Heitor",
      idade: 32,
      cartoes: ['2342','2342'],
    },
    {
      nome: "Gustavo",
      idade: 64,
      cartoes: ['2342','2342'],
    },
    {
      nome: "Sandra",
      idade: 33,
      cartoes: ['2342','2342'],
    },
  ];

const cartoes = lista.flatMap((cartao) => cartao.cartoes);
console.log(cartoes);


// O FLATMAP PEGA UM ARRAY DENTRO DE UM ARRAY, E TRANSFORMAR EM UM ARRAY UNICO
// FLATMAP PEGA A LISTA E CONVERTE DENTRO DE UMA LISTA DE OBJETO