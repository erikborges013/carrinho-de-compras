let resultado = 0;
document.getElementById('quantidade').value = 0;
document.getElementById('valor-total').innerHTML = 'R$0,00';
document.getElementById('lista-produtos').innerHTML = ' ';
let produtos = {
    'Fone de ouvido - R$100':{nome: 'Fone de ouvido', precoUnitario: 100, precoTotal: 0},
    'Celular - R$1400': {nome: 'Celular', precoUnitario: 1400, precoTotal: 0},
    'Oculus VR - R$5000': {nome: 'Oculos', precoUnitario: 5000, precoTotal: 0}
};

function adicionar() {
    let produtoSelecionado = document.getElementById('produto').value;

    let quantidade = Number(document.getElementById('quantidade').value);
    let quantidadeConvertido = parseInt(quantidade);

    let produto = produtos[produtoSelecionado];
    resultado += produto.precoUnitario * quantidadeConvertido;
    console.log(resultado);
    let listaDeProdutos = document.getElementById('lista-produtos');

    produtos[produtoSelecionado].precoTotal = produtos[produtoSelecionado].precoUnitario * quantidadeConvertido;

    if (quantidade < 1){
        alert(`Por favor selecione quantos ${produtos[produtoSelecionado].nome} você deseja.`)
        

    } else  if (quantidade >= 1) {
      
        listaDeProdutos.innerHTML +=  '<section class="carrinho__produtos__produto">' +
        '<span class="texto-azul">' + quantidadeConvertido + '</span>' + 'x ' + produtos[produtoSelecionado].nome + ' ' + '<span class="texto-azul">' + 'R$' + produtos[produtoSelecionado].precoTotal + '</span>' +
      '</section>'

    }
    let valorTotal = document.getElementById('valor-total');
    valorTotal.innerHTML = 'R$' + resultado.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});




    //console.log(listaDeProdutos);
}
let zero = 0;
function limpar() {
    document.getElementById('valor-total').innerHTML = 'R$0,00';
    document.getElementById('lista-produtos').innerHTML = ' ';
    
}
