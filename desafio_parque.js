function podeSubir(altura_Pessoa,esta_Acompanhada){

    var altura_Pessoa = altura_Pessoa;
    var esta_Acompanhada = "acompanhada";


    while(altura_Pessoa > 1.40 && altura_Pessoa < 2.00){
        return true + ("   Você pode subir");
    }

    while(altura_Pessoa < 1.40 + "acompanhada"){
        return true + ("   Deverá ir acompanhada");}

    while(altura_Pessoa < 1.20){
            return false + ("   Não é permitido sua subida, mesmo estando acompanhada");}
    

    return false + ("   Você não pode subir");
}

podeSubir(1.00);
console.log(podeSubir(1.00)














