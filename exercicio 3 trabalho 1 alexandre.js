/*
Desenvolva uma aplicação em JavaScript para ler um salário e atualizá-lo de acordo
com a tabela abaixo.
Faixa salárial Aumento
até 1.045,00 30%
1.045,01 a 1.500,00 25%
1.500,01 a 2.600,00 20%
2.600,01 a 3.550,00 15%
Acima de 3.550,00 10%
*/
const aumento1 = 30;
const aumento2 = 25;
const aumento3 = 20;
const aumento4 = 15;
const aumento5 = 10;
var salariofinal;
seuSalario = prompt("Digite seu salário: ");
let salario=Number(seuSalario);
if (salario>=3550.01) {(salarioFinal=salario/100*aumento5+salario)}
else if (salario>=2600.01) {  (salarioFinal=salario/100*aumento4+salario)}
  else if (salario>=1500.01) {(salarioFinal=salario/100*aumento3+salario)}
    else if (salario>=1045.01) {(salarioFinal=salario/100*aumento2+salario)}
      else {(salarioFinal=salario/100*aumento1+salario)};
const varsalario = salarioFinal.toFixed(2);
console.log("O novo salário será: "+varsalario);
