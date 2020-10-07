var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines.shift());
const π = 3.14159;
const area = π * Math.pow(raio, 2);

console.log("A=" + area.toFixed(4));
