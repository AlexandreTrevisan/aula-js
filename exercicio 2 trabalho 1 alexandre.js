/*
Um comerciante comprou um produto e quer vendê-lo com um lucro de 45% se o valor
da compra for menor que R$ 50,00; caso contrário, o lucro será de 30%. Desenvolva
uma aplicação em JavaScript que leia o valor do produto e imprima o valor de venda
para o produto.
*/
const lucro1 = 45; 
const lucro2 = 30;
const valorDaCompra=48;
let nome = "Produto Aleatório";
console.log(nome);
if (valorDaCompra<=50)
  {(valorFinal=valorDaCompra/100*lucro1+valorDaCompra)} 
  else {(valorFinal=valorDaCompra/100*lucro2+valorDaCompra)};
console.log("O valor final é " +valorFinal);