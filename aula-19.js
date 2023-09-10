function calcular(){// QUANDO TRANPILAR ESSA FUNÇÃO VAI PARA CIMA DO CODIGO
    console.log('Passou1')
}

// EXEMPLOS DE SINTAXE DE FUNÇÕES

const funcao = function(){//PODEMOS PASSAR UMA FUNÇÃO PARA UMA CONSTANTE
    console.log('Passou2')
    return 500;
}

const calcular2 = (funcao1) =>{// ARROW FUNCTION
    console.log('Passou3')
    return funcao1();
}

console.log('Resultado: ',calcular2(funcao))// PASSANDO UMA FUNÇÃO COMO PARAMETRO

// const x = calcular2();
// console.log(x);// RETORNA UNDEFINED POIS A FUNÇÃO NÃO RETORNA NADA
// // PARA RETORNAR ALGO DE UMA FUNÇÃO ARROW É NECESSARIO COLOCAR O RETURN

// const y = funcao();
// console.log(y);// RETORNA UNDEFINED POIS A FUNÇÃO NÃO RETORNA NADA