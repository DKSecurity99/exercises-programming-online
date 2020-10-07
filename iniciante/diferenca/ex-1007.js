var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var A = parseInt(lines[0]);
var B = parseInt(lines[1]);
var C = parseInt(lines[2]);
var D = parseInt(lines[3]);

DIFERENCA = (A * B) - (C * D);

console.log("DIFERENCA = " + DIFERENCA);
