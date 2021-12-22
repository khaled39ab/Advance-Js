const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8];

const part = numbers.slice(2,6);
console.log(part);

const removed = numbers.splice(3, 2);
console.log(removed);
console.log(numbers);

const join = numbers.join ("+");
console.log(join);