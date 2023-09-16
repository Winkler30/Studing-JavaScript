const propriedadePadrao = (valorInicial) =>({
    value: valorInicial,
    writable: false, // SE ESTIVER TRUE => PODE ALTERAR O VALOR DA PROPRIEDADE
    configurable: false, // SE ESTIVER COMO TRUE => PODE APAGAR A PROPRIEDADE
    enumerable: true,// SE ESTIVER COMO TRUE => PODE EXIBIR A PROPRIEDADE
  })

class Usuario {

  constructor(email, senha, nome) {
    Object.defineProperties(this, {
      nome: propriedadePadrao(nome),
      senha: propriedadePadrao(senha),
      email: propriedadePadrao(email),
    });
  }
}

const usuario = new Usuario("email", "senha", "nome");

console.log(usuario);
