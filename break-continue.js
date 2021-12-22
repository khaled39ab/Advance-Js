const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ];

for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    // console.log(element);

    if (element > 5){
        break;
    }
    console.log(element);
}

console.log("----------------");

const numbers = [ 1, -6, 2, -4, 8, 9, -3];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if( element < 0){
        continue;
    }
    console.log(element);
    
}