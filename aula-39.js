const propriedadePadrao = (valorInicial) =>({
    value: valorInicial,
    writable: false, // SE ESTIVER TRUE => PODE ALTERAR O VALOR DA PROPRIEDADE
    configurable: false, // SE ESTIVER COMO TRUE => PODE APAGAR A PROPRIEDADE
    enumerable: true,// SE ESTIVER COMO TRUE => PODE EXIBIR A PROPRIEDADE
  })

class Usuario {

  constructor(email, senha, nome) {
    Object.defineProperties(this, {
      nome: {
        get: () => nome,
        set: (value) => email = value,
      },
      senha: {
        get: () => senha,
        set: (value) => {
            if(value.length < 4){
                throw new TypeError("Precisa de pelo menos de 4 caracteres");
            }
            senha = value;
        },
      },
      email: {
        get: () => email,
        set: (value) => email = value,
      }
    });
  }

  getEmail(){
    return this.email;
  }
}

const usuario = new Usuario("email", "senha", "nome");
usuario.senha = "1234";

console.log(usuario);
console.log(usuario.getEmail());
