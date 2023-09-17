const qualquer = {
  abc: "texto",
  def: "texto2",
  ghi: "texto3",
  jkl: "texto4",
};

const novoQualquer = {
  //   abc: qualquer.abc,
  //   def: qualquer.def,
  //   ghi: qualquer.ghi,
  //   jkl: qualquer.jkl,
  ...qualquer,// TOMAR CUIDADO PQ ELE REFAZ ESSE OBJETO ITEM A ITEM, CRIA UM OBJETO NOVO
  final: "FINAL",
};

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const lista2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

// console.log(qualquer);
// console.log(novoQualquer);

const listaJunta = [...lista, ...lista2];
console.log(listaJunta);
