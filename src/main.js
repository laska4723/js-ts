import { circleArea, generateInteger, squareArea } from './numbers.js';

console.log(generateInteger(1, 10));

const randomNum = generateInteger(1, 11);
console.log(squareArea(randomNum));

const randomNum2 = generateInteger(3, 13);
console.log(circleArea(randomNum2));
