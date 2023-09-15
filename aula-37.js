class Usuario {
    email;
    senha;
    nome;

    validarSenha(email,senha) {
        return email + senha === this.nome
    }
  
    constructor (email, senha, nome){
      this.email = email;
      this.senha = senha;
      this.nome = nome;
    }
  }
  
  class Administrador extends Usuario {
    permissoes;

    validarSenha(email,senha) {
        return email === this.email && senha === this.senha
    }
  
  
    constructor (email, senha, nome, permissoes){
      super(email, senha, nome);
      this.permissoes = permissoes;
    }
  }
  
  class Comprador extends Usuario {
    compras;
  }
  
  const admin = new Administrador("email@gmail.com","senha","Charles",[1,6])
  const usuario = new Usuario("email@gmail.com","senha","Charles")
  
  const comprador = new Comprador()
  comprador.senha = "123456"
  
  console.log(usuario.validarSenha("email@gmail.com","senha"))
  console.log(admin.validarSenha("email@gmail.com","senha"))
  