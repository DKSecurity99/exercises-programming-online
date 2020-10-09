var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines[0]);
var B = parseInt(lines[1]);

var SOMA = A + B;

console.log("SOMA = " + SOMA);

