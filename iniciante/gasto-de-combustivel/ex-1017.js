var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempo = parseInt(lines[0]);
var velocidade = parseInt(lines[1]);

var litros = (velocidade * tempo) / 12;

console.log(litros.toFixed(3));
