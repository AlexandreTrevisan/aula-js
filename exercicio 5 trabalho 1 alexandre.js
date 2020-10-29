/*
Uma faculdade oferece um curso que prepara os candidatados a obter licença estadual
para corretor de imóveis. No ano passado, dez alunos que concluíram esse curso
prestaram o exame. A universidade quer saber como foi o desempenho dos seus alunos
que concluíram esse curso prestaram o exame. Você foi contratado para escrever de
programa que resuma os resultados. Para tanto, você recebeu uma lista desses 10
alunos. Ao lado de cada nome é escrito 1 se o aluno, passou no exame ou 2 se o aluno
foi reprovado.
Desenvolva uma aplicação em JavaScript que:
a) Insira a cada resultado do exame (isto é, um 1 ou um 2). Exiba a mensagem
“Inserir resultado” na tela toda vez que o programa solicitar o resultado do outro
exame.
b) Conte o número de cada tipo de resultado.
c) Exiba um resumo dos resultados do exame indicando o número de alunos
aprovados e reprovados.
d) Se mais de oito estudantes forem aprovados no exame, imprima a mensagem
“Bonus to Instructor!”
*/
var resultAluno01;
var resultAluno02;
var resultAluno03;
var resultAluno04;
var resultAluno05;
var resultAluno06;
var resultAluno07;
var resultAluno08;
var resultAluno09;
var resultAluno10;
var totalAprovado=0;
var totalReprovado=0;
resultAluno01 = prompt ("Aluno 01: digite 1 para aprovado ou 2 para reprovado");
let Aluno01=Number(resultAluno01);
resultAluno02 = prompt ("Aluno 02: digite 1 para aprovado ou 2 para reprovado");
let Aluno02=Number(resultAluno02);
resultAluno03 = prompt ("Aluno 03: digite 1 para aprovado ou 2 para reprovado");
let Aluno03=Number(resultAluno03);
resultAluno04 = prompt ("Aluno 04: digite 1 para aprovado ou 2 para reprovado");
let Aluno04=Number(resultAluno04);
resultAluno05 = prompt ("Aluno 05: digite 1 para aprovado ou 2 para reprovado");
let Aluno05=Number(resultAluno05);
resultAluno06 = prompt ("Aluno 06: digite 1 para aprovado ou 2 para reprovado");
let Aluno06=Number(resultAluno06);
resultAluno07 = prompt ("Aluno 07: digite 1 para aprovado ou 2 para reprovado");
let Aluno07=Number(resultAluno07);
resultAluno08 = prompt ("Aluno 08: digite 1 para aprovado ou 2 para reprovado");
let Aluno08=Number(resultAluno08);
resultAluno09 = prompt ("Aluno 09: digite 1 para aprovado ou 2 para reprovado");
let Aluno09=Number(resultAluno09);
resultAluno10 = prompt ("Aluno 10: digite 1 para aprovado ou 2 para reprovado");
let Aluno10=Number(resultAluno10);
if (Aluno01 <= 1){
  console.log ("o aluno 01 foi aprovado");
  totalAprovado=totalAprovado+1; } 
  else { console.log ("o aluno 01 foi reprovado");
  totalReprovado=totalReprovado+1;}
if (Aluno02 <= 1){
  console.log ("o aluno 02 foi aprovado");
  totalAprovado=totalAprovado+1; } 
  else { console.log ("o aluno 02 foi reprovado");
  totalReprovado=totalReprovado+1;}
if (Aluno03 <= 1){
  console.log ("o aluno 03 foi aprovado"); 
  totalAprovado=totalAprovado+1; } 
  else { console.log ("o aluno 04 foi reprovado");
  totalReprovado=totalReprovado+1;}
if (Aluno04 <= 1){
  console.log ("o aluno 04 foi aprovado"); 
  totalAprovado=totalAprovado+1; } 
  else { console.log ("o aluno 04 foi reprovado");
  totalReprovado=totalReprovado+1;}
if (Aluno05 <= 1){
  console.log ("o aluno 05 foi aprovado"); 
  totalAprovado=totalAprovado+1; } 
  else { console.log ("o aluno 05 foi reprovado");
  totalReprovado=totalReprovado+1;}
if (Aluno06 <= 1){
  console.log ("o aluno 06 foi aprovado"); 
  totalAprovado=totalAprovado+1; } 
  else { console.log ("o aluno 06 foi reprovado");
  totalReprovado=totalReprovado+1;}
if (Aluno07 <= 1){
  console.log ("o aluno 07 foi aprovado"); 
  totalAprovado=totalAprovado+1; } 
  else { console.log ("o aluno 07 foi reprovado");
  totalReprovado=totalReprovado+1;}
if (Aluno08 <= 1){
  console.log ("o aluno 08 foi aprovado");
  totalAprovado=totalAprovado+1; } 
  else { console.log ("o aluno 08 foi reprovado");
  totalReprovado=totalReprovado+1;}
if (Aluno09 <= 1){
  console.log ("o aluno 09 foi aprovado"); 
  totalAprovado=totalAprovado+1; } 
  else { console.log ("o aluno 9 foi reprovado");
  totalReprovado=totalReprovado+1;}
if (Aluno10 <= 1){
  console.log ("o aluno 10 foi aprovado");
  totalAprovado=totalAprovado+1; } 
  else { console.log ("o aluno 10 foi reprovado");
  totalReprovado=totalReprovado+1;};
 console.log ("Total de alunos aprovados: "+totalAprovado);
 console.log ("Total de alunos reprovado: "+totalReprovado);
 if (totalAprovado>=8){
   console.log("“Bonus to Instructor!”")
 }