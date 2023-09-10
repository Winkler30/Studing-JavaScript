const sleep = async (ms) => {
    return new Promise (resolve => setTimeout(resolve, ms));
}
const aguardarComRetorno = async () => {
    await sleep(3000);
    return 30;
}

const aguardar = async () => {
    console.log('PASSOU', 2**2);
    const resultado = await aguardarComRetorno();
    console.log('PASSOU', resultado);
    console.log('PASSOU', 3**3);
    console.log('PASSOU', 4**4);
    console.log('PASSOU', 5**5);
}

aguardar();