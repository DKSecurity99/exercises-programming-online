var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines[0]);
var salary = parseInt(lines[1]);
var hours = parseFloat(lines[2]);

var salaryInHours = salary * hours;

console.log("NUMBER = " + number + "\n" + "SALARY = U$ " + salaryInHours.toFixed(2));
