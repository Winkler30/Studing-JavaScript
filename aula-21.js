
const teste1 = (callback) => {
    setTimeout(() => {
        console.log('teste1');
        callback();
    },1000)
};

const teste2 = () => {
    setTimeout(() => {
        console.log('teste2');
    },800)
};

const teste3 = () => {
    setTimeout(() => {
        console.log('teste3');
    },600)
};

const teste4 = () => {
    setTimeout(() => {
        console.log('teste4');
    },400)
};

const funcaoCallBack = () => {
    console.log('SALVOU O USUARIO');
}

teste1(funcaoCallBack);
console.log(1+1)
teste2();
teste3();
console.log(2+2)
teste4();

// O JS TRABALHA COM UMA SINGLE TRHEAD, OU SEJA, ELE EXECUTA UMA COISA DE CADA VEZ.
// LINHA POR LINHA