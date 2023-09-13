const objeto = [
  {
    nome: "Lucas",
    idade: 23,
  },
  {
    nome: "João",
    idade: 15,
  },
  {
    nome: "Maria",
    idade: 30,
  },
  {
    nome: "José",
    idade: 25,
  },
  {
    nome: "Paulo",
    idade: 18,
  },
  {
    nome: "Pedro",
    idade: 27,
  },
];

const funcaoReduce = (acc, item) => {
  return {
    ...acc,
    [item.nome]: {
      ...item,
    },
  };
};

const pessoa = objeto.reduce(funcaoReduce, {});
console.log(pessoa);
console.log(pessoa.Paulo.idade);

// O METODO REDUCE É BEM PARECIDO COM O MAP, PORÉM ELE RETORNA UM VALOR ÚNICO
// PODE RETORNAR UM ARRAY, UM OBJETO, UMA STRING, UM NUMERO, ETC

// const pessoa ={
//     jose:{
//         idade: 30,
//     },
//     joao:{
//         idade: 20,
//     },
//     maria:{
//         idade: 25,
//     }
// }
