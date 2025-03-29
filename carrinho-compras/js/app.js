function adicionar() {
    let produtos = document.getElementById('produto');
    let produtoSelecionado = produtos.value;
//Aqui eu consegui recuperar o valor do produto selecionado
//Agora vamos tentar recuperar o valor digitado de quantidade
    let quantidade = document.getElementById('quantidade').value;
    let quantidadeConvertido = parseFloat(quantidade);
//Aqui eu consegui recuperar o valor digitado no campo quantidade
//Aqui embaixo iremos tentar atribuir o preço de cada produto
    const foneDeOuvido = 'Fone de ouvido - R$100';
    const celular = 'Celular - R$1400';
    const oculos = 'Oculus VR - R$5000';
    let resultado = 0;
    if (produtoSelecionado == foneDeOuvido) {
        resultado += 100 * quantidadeConvertido;
        console.log(resultado);
    } else if (produtoSelecionado == celular){
        resultado += 1400 * quantidadeConvertido;
        console.log(resultado);
    } else if (produtoSelecionado == oculos){
        resultado += 5000 * quantidadeConvertido;
        console.log(resultado);
    }
}