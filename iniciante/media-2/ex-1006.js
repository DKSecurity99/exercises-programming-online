var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);

var MEDIA = ((A * 2) + (B * 3) + (C * 5)) / 10;

console.log("MEDIA = " + MEDIA.toFixed(1));
