// Micro Desafio numero impar

let numeros= [2,4,6,8];

let impar = numeros.map(function(num){

    return num + 1

});

console.log(impar);

// Micro Desafio filtrar nome

let nomes= ["Maria", "João", "Domingos", "Carlos", "Maria", "Pedro"];

function retorneNome (nome){
    if(nome == "Maria")
    return nome;
}

var resultado = nomes.filter(retorneNome);
console.log(resultado);

var animais = ['cavalo','carneiro','cobra', 'touro', 'vaca'];

// Desafio procure o animal

function bixo(animal){

    console.log("O animal é: " + animal);
}

animais.forEach(bixo);






