const numbers = [5, 8, 9, 6, 3];
const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push (result); 
// }
// console.log(output);

//same function syntax 
// function square (element){
//     return element * element;  
// }

// const square = element => element * element;

// const square = x => x * x;

// numbers.map (function (element, index, array){ // Map can contains 3 parameter. 1.element 2.index 3.array
//     console.log(element, index, array);
// })

// const result = numbers.map (function (element){
//     return element * element;
// });

const result = numbers.map (x => x * x); //map is smart way of for loop
console.log(result);

const bigger = numbers.filter (x => x >= 6);
console.log(bigger);

const smaller = numbers.filter (x => x < 6);
console.log(smaller);

const isThere = numbers.find ( x => x > 6); // find method will find anyone element in array and show it.
console.log(isThere);