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
  return `\nДобро пожаловать!
Имя: ${name}
Возраст: ${age}
Надеемся, Вам понравится пользоваться нашим сервисом!`;
};
