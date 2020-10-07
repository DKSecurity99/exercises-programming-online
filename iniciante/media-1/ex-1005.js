var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);

var MEDIA = ((A * 3.5) + (B * 7.5)) / 11;

console.log("MEDIA = " + MEDIA.toFixed(5));
