
let produtos = {
    'Fone de ouvido - R$100':{nome: 'Fone de ouvido', precoUnitario: 100, precoTotal: 0},
    'Celular - R$1400': {nome: 'Celular', precoUnitario: 1400, precoTotal: 0},
    'Oculus VR - R$5000': {nome: 'Oculos', precoUnitario: 5000, precoTotal: 0}
};
let resultado = 0;
function adicionar() {
    let produtoSelecionado = document.getElementById('produto').value;

    let quantidade = document.getElementById('quantidade').value;
    let quantidadeConvertido = parseFloat(quantidade);

    let produto = produtos[produtoSelecionado];
    resultado += produto.precoUnitario * quantidadeConvertido;
    console.log(resultado);

    produtos[produtoSelecionado].precoTotal += produtos[produtoSelecionado].precoUnitario * quantidadeConvertido;
    let listaDeProdutos = document.querySelectorAll('.texto-azul');
    listaDeProdutos.innerHTML += produto.nome;

    let valorTotal = document.getElementById('valor-total');
    valorTotal.innerHTML = resultado.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});
    //console.log(listaDeProdutos);
}