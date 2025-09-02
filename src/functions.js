import chalk from 'chalk';

export const len = (text) => {
  return text.length;
};

export const func = (text) => {
  return (
    chalk.green(text.slice(0, 1).toUpperCase()) +
    chalk.blue(text.slice(1, -1).toLowerCase()) +
    chalk.green(text.slice(-1).toUpperCase())
  );
};

export const isStringStartsWith = (text, part) => {
  return text.toLowerCase().startsWith(part.toLowerCase());
};

export const formatString = (name, age) => {
  console.log(`Добро пожаловать!
Имя: ${name}
Возраст: ${age}
Надеемся, Вам понравится пользоваться нашим сервисом!`);
};

export const logStringInfo = (text) => {
  const first = '\x1b[33m' + text[0] + '\x1b[0m';
  const last = '\x1b[32m' + text[text.length - 1] + '\x1b[0m';

  console.log(`Символов: ${text.length}\nПервый: ${first}\nПоследний: ${last}`);
};
