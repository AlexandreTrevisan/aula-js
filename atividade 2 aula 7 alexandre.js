var TotalArray=[]
varNumero = prompt ("Entre com o numero para calcular a tabuada: ");

function FTabuada(varNumero) { 
  for (var varIncremento = 0; varIncremento <= 10; varIncremento++) {
    TotalArray[varIncremento]= varIncremento * varNumero; 
    console.log(varNumero+" X "+varIncremento+" = "+TotalArray[varIncremento]);
  }
};
console.log( FTabuada(varNumero))