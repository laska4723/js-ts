import { len, func, isStringStartsWith, formatString } from './functions.js';

console.log(len('Привет!')); // 7
console.log(len('Это очень длинная строка :)')); // 27

console.log();

console.log(func('МОЛОКО')); // МолокО
console.log(func('картошка')); // КартошкА
console.log(func('СтРаНнОе СлОвО')); // Странное словО

console.log();

console.log(isStringStartsWith('Ветеринар', 'вет')); // true
console.log(isStringStartsWith('Молоко', 'мол')); // true
console.log(isStringStartsWith('Карго Корги', 'КАРГО ')); // true
console.log(isStringStartsWith('Карго Корги', 'кор ')); // false
console.log(isStringStartsWith('Ковёр', 'кова ')); // false

console.log(formatString('Анатолий', 17));
