function calcular (valor){
    if (valor === 0){
        throw new Error("Valor não pode ser 0");
    }
    return valor/2;
}
try{
    const resultado = calcular(654);
    console.log(resultado);
}catch(error){// trata os erros exibindo a mensagem
    console.log(error.message);
}finally{
// essa função faz com que os erros não propagem outros erros diferentes
//ex quando criamos um ususario e um enderço para ele, só que quando criamos ele só cria
//o usuario e não o endereço, então o finally exclui o usuario criado
    console.log('Sempre será executado');
}

console.log('Com a função try catch o programa não para de executar')