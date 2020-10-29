const GRIF = 1 ;
const SONS = 2 ;
const CORV = 3 ;
const LUFA = 4 ;
var varCasa = 0;
console.log("digite 1 para a qualidade coragem")
console.log("digite 2 para a qualidade ambicioso")
console.log("digite 3 para a qualidade grande capacidade intelectual")
console.log("digite 4 para a qualidade gentil") 

do {
   varCasa = prompt ("Digite o numero correspondente a sua qualidade de 1 a 4");
   if (varCasa < 1 || varCasa>4){
     console.log("Opção invalida "+varCasa);
   }
} while (varCasa < 1 || varCasa>4);

function harryPotter(numInteiro) {
  switch(numInteiro) {
    case GRIF:
      console.log("Você vai para casa Grifinória");
      break;
    case SONS:
      console.log("Você vai para casa Sonserina");
      break;
    case CORV:
      console.log("Você vai para casa Corvinal");
      break;
    case LUFA:
      console.log("Você vai para casa Lufa-Lufa");
      break;
  }
}
var numInteiro = parseInt(varCasa, 10);
console.log(harryPotter(numInteiro));
  