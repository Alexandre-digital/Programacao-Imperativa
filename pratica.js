let produtos= [

    {nome: "geladeira", valor: 490, qualidade: 7, Status:true},
    {nome: "televisão", valor:300, qualidade: 8, Status:false},
    {nome: "lavadoura", valor: 900, qualidade:5, Status:true},

    

];


let resultado = produtos.filter(function(produto){
    return produto.valor > 400 && produto.qualidade > 6
});

console.log(resultado);







