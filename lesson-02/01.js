// code
let number = 1;

number = number--;
console.log(number); //1

number = ++number;
number = ++number;
console.log(number); //3

console.log(number); //3

number = --number;
number = --number;
console.log(number); //1
