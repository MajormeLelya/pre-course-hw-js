const numbers = [
  [1, 2, 3, 4, 5],
  [11, 20, 33, 40, 55],
  [111, 200, 333, 400, 555],
];

function removeOddNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = removeOddNumbers(numbers[i]);
}

console.log(numbers);
