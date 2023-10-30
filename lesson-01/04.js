let number1 = Math.floor(Math.random() * 100);

let ranNumber;

if (number1 % 2 === 0) {
  ranNumber = number1 + " :Это четное число";
} else {
  ranNumber = number1 + " :Это нечетное число";
}

console.log(ranNumber);

let number = 1;

console.log(number++);
console.log(++number);
console.log(number--);
console.log(--number);

let x = 5;
x += 3;
x *= 2;
x -= 4;
x /= 3;

console.log(x);
