/*
Desenvolva uma aplicação em JavaScript para simular o lançamento de dois dados em
uma jogada de 10. A soma dos dois valores deve então ser calculada. Cada dado pode
mostrar um valor de 1 a 6, portanto a soma dos valores irá variar de 2 a 12. Imprima
quando o resultado da soma for par e quando for impar e também a quantidade total de
pares em impares ao final.
*/
var valorDado1 = new Array();
var valorDado2 = new Array();
var valorTotal = new Array();
var varPares=0;
var varImpares=0;
var varSomaPar=0;
var varSomaImpar=0;
for (lancamentoDados = 0; lancamentoDados < 10; lancamentoDados++) {
  varDado1 = Math.random() * (7-1);
  if (varDado1>=6)
    {(dado1=6)}
    else if (varDado1>=5) 
    {(dado1=5)}
    else if (varDado1>=4) 
    {(dado1=4)}
    else if (varDado1>=3) 
    {(dado1=3)}
    else if (varDado1>=2) 
    {(dado1=2)}
    else  
    {(dado1=1)};
  varDado2 = Math.random() * (7-1);
  if (varDado2>=6)
    {(dado2=6)}
    else if (varDado2>=5) 
    {(dado2=5)}
    else if (varDado2>=4) 
    {(dado2=4)}
    else if (varDado2>=3) 
    {(dado2=3)}
    else if (varDado2>=2) 
    {(dado2=2)}
    else  
    {(dado2=1)};
  console.log("Resultado do Dado 1: "+dado1);
  console.log("Resultado do Dado 2: "+dado2);
  valorDado1[lancamentoDados]=dado1;
  valorDado2[lancamentoDados]=dado2;
  valorTotal[lancamentoDados]=dado1+dado2;
  if (Number.isInteger(valorTotal[lancamentoDados]/2)) {
    varPares=varPares+1;
    varSomaPar=varSomaPar+(valorTotal[lancamentoDados]);}
    else {
    varImpares=varImpares+1;
    varSomaImpar=varSomaImpar+(valorTotal[lancamentoDados])
  };
}
console.log("Resultado acumulado do Dado 1: "+valorDado1);
console.log("Resultado acumulado do Dado 2: "+valorDado2);
console.log("Resultado da soma dos dois dados: "+valorTotal);
console.log("Quantidade de Numeros Pares: "+varPares);
console.log("Soma total dos Numeros Pares: "+varSomaPar);
console.log("Quantidade de Numeros Impares: "+varImpares);
console.log("Soma total dos Numeros Impares: "+varSomaImpar);