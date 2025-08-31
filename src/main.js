import { sayHi, sayText, sum, power, tomatoPrice } from './functions.js';

sayHi('Анатолий');
sayText('Привет');
sum(4, 6, 5, 9, 3);
power(2, 10);

console.log();

console.log(tomatoPrice(1)); // 450
console.log(tomatoPrice(0.65)); // 292.5
console.log(tomatoPrice(3.289)); // 1480.05

console.log(tomatoPrice(0, 50)); // 0
console.log(tomatoPrice(1, 22.5)); // 22.5
console.log(tomatoPrice(14.96, 21.0007)); // 314.170472
