/*
Para cada conjunto de valores abaixo, escreva o código em JavaScript usando laço(s)
onde na opção a é para ordenar o array de forma crescente e no caso do segundo, a
letra b é de forma decrescente.
a) 10 9 8 7 6 5 4 3 2 1
b) 0 1 4 9 16 25 36 49 64 81 100
*/
var arrayA = [10,9,8,7,6,5,4,3,2,1];
var arrayB = [0,1,4,9,16,25,36,49,64,81,100];

console.log('Array original A:', arrayA);
console.log('Array original B:', arrayB);
arrayA.sort(function(a, b) {
    return a - b;
});
arrayB.sort(function(a, b) {
    return b - a;
});
console.log('Array ordenado A:', arrayA);
console.log('Array ordenado B:', arrayB);