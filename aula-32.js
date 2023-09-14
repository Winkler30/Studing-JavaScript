const lista = [
  {
    nome: "Jose",
    idade: 13,
    exibir: true,
  },
  {
    nome: "Joao",
    idade: 42,
  },
  {
    nome: "Maria",
    idade: 23,
  },
  {
    nome: "Gabriela",
    idade: 25,
  },
  {
    nome: "Fernanda",
    idade: 65,
  },
  {
    nome: "André",
    idade: 69,
  },
  {
    nome: "Heitor",
    idade: 32,
  },
  {
    nome: "Gustavo",
    idade: 64,
  },
  {
    nome: "Sandra",
    idade: 33,
  },
];

lista.sort((a, b) => {
  if (a.nome.toUpperCase() < b.nome.toUpperCase()) {
    return -1;
  } else if (a.nome.toUpperCase() > b.nome.toUpperCase()) {
    return 1;
  } else {
    return 0;
  }
});

console.log(lista);
// O SORT NÃO DEVOLVE UM OBJETO, 
// APENAS MUDA A ORGEM DO OBJETO QUE ELE ESTÁ TRABALHANDO