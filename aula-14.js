const mensagem = 'Oi tudo bem?'
const mensagem2 = "Meu nome é Charles"

console.log(mensagem.length);

// FORMAS DE CONCATENAR VARIAVEIS

// 1 - Concatenando com o sinal de +
console.log('Concatenando com o sinal de +:', (mensagem + ' ' + mensagem2)); // O + É MAIS RÁPIDO, POIS É OTIMIZADO PELO MECANISMO DO JS
// 2 - Concatenando com o sinal de ,
console.log('Concatenando com o sinal de ,:',(mensagem, mensagem2));
// 3 - Concatenando com o sinal de ${}
console.log(`Concatenando com o sinal de: ${mensagem} ${mensagem2}`);
// 4 - Concatenando com o CONCAT
console.log('Concatenando com o CONCAT:',(mensagem.concat(mensagem2))); // O CONCAT É EXECUTADO PELO PROPRIO JS

// PODEMOS PEGAR ALGUMAS LETRAS DE UMA STRING
console.log(mensagem.substring(0,2)); // PEGANDO AS LETRAS DA POSIÇÃO 0 ATÉ A POSIÇÃO 2
console.log(mensagem.substring(3)); // PEGANDO AS LETRAS DA POSIÇÃO 3 ATÉ O FINAL DA STRING
console.log(mensagem2.split(' ')); // SEPARANDO A STRING EM UM ARRAY, SEPARANDO POR ESPAÇO


console.log(mensagem.toUpperCase()); // DEIXANDO A STRING EM MAIUSCULO
console.log(mensagem2.toLowerCase()); // DEIXANDO A STRING EM MINUSCULO
console.log(mensagem.replace('Oi', 'Olá')); // TROCANDO UMA PALAVRA POR OUTRA
