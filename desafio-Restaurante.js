function Restaurante(taGostoso,...cardapio)
{
this.taGostoso=taGostoso;
this.cardapio=cardapio;

this.entrada= function(){
    return "Bem vindo ao " + this.taGostoso +'!'+ "  Cardápio do dia: " + this.cardapio +'.';

};

};

let pedido=new Restaurante('taGostoso','Frango Assado','Peixe Frito','Bife Acebolado','Ensopado');

console.log(pedido.entrada());



