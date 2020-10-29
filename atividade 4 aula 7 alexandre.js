const S = 'S';
const D = 'D';
const R = 'R';
console.log("digite D para Deposito");
console.log("digite S para Saque");
console.log("digite R para ver seu Saldo");
var vSaldo = 1000 ;

opcao = prompt ("Digite a opcao desejada");

function banco(opcao) {
   switch(opcao) {
    case S:
      console.log("saldo inicial é: " + vSaldo);
      break;
    case D:
      valor = prompt ("Digite o valor da movimentação ");
      var numInteiro = parseInt(valor, 10);
      console.log("saldo inicial é: " + vSaldo);
      vSaldo=vSaldo+numInteiro;
      console.log("seu deposito foi de: " + valor);
      console.log("saldo final é: " + vSaldo);
      break;
    case R:
      valor = prompt ("Digite o valor da movimentação");
      console.log("saldo inicial é: " + vSaldo);
      vSaldo=vSaldo-valor;
      console.log("seu saque foi de: " + valor);
      console.log("saldo final é: " + vSaldo);
      break;
  }
}

console.log(banco(opcao));