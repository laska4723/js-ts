import { circleArea, generateInteger, squareArea, isEven, calculateChange } from './numbers.js';

console.log(generateInteger(1, 10));
console.log('----------------------');

const randomNum = generateInteger(1, 11);
console.log(squareArea(randomNum));
console.log('----------------------');

const randomNum2 = generateInteger(3, 13);
console.log(circleArea(randomNum2));
console.log('----------------------');

const randomNum3 = generateInteger(1, 24);
console.log(randomNum3);
console.log(isEven(randomNum3));
console.log('----------------------');

calculateChange(12575);
console.log('----------------------');
