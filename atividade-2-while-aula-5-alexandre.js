var i = 0;
varTermos = 0;
var varFibonacci = new Array();
varFibonacci[0]=0;
varFibonacci[1]=1;
varResultado=0;
console.log("Serie de Fibonacci");
varTermos = prompt ("digite o numero de termos da série: ");
while (i < varTermos-2) {
  i+=1;
  varResultado=varFibonacci[i]+varFibonacci[i-1];
   varFibonacci[i+1]=varResultado;
};
console.log(varFibonacci);