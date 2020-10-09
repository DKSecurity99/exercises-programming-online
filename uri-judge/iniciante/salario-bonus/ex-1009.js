var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var comissao = 15;

var nome = lines[0];
var salario = parseFloat(lines[1]);
var vendas = parseFloat(lines[2]);

var total = ((comissao / 100) * vendas) + salario;
console.log("TOTAL = R$ " + total.toFixed(2));

