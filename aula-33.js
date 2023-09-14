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

const resultado = lista.some((objeto) => objeto.idade > 12);//SOME SERIA UM OU ||
const resultadoEver = lista.every((objeto) => objeto.idade > 12);// EVERY SERIA UM E &&

console.log('Resultado: ',resultado);
console.log('Resultado: ',resultadoEver);
