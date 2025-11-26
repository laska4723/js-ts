import chalk from 'chalk';

export const generateInteger = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

export const squareArea = (a) => {
  return a * a;
};

export const circleArea = (r) => {
  return +(Math.PI * r ** 2).toFixed(2);
};

export const isEven = (n) => {
  return n % 2 === 0;
};

export const calculateChange = (amount) => {
  let remainAmount = amount;

  const banknotes5000 = Math.floor(remainAmount / 5000);
  remainAmount %= 5000;

  const banknotes2000 = Math.floor(remainAmount / 2000);
  remainAmount %= 2000;

  const banknotes1000 = Math.floor(remainAmount / 1000);
  remainAmount %= 1000;

  const banknotes500 = Math.floor(remainAmount / 500);
  remainAmount %= 500;

  const banknotes100 = Math.floor(remainAmount / 100);
  remainAmount %= 100;

  const banknotes50 = Math.floor(remainAmount / 50);
  remainAmount %= 50;

  const banknotes10 = Math.floor(remainAmount / 10);
  remainAmount %= 10;

  console.log(`${chalk.green('Купюр 5000 необходимо')} ${chalk.blue(banknotes5000)}
  ${chalk.green('Купюр 2000 необходимо')} ${chalk.blue(banknotes2000)}
  ${chalk.green('Купюр 1000 необходимо')} ${chalk.blue(banknotes1000)}
  ${chalk.green('Купюр 500 необходимо')} ${chalk.blue(banknotes500)}
  ${chalk.green('Купюр 100 необходимо')} ${chalk.blue(banknotes100)}
  ${chalk.green('Купюр 50 необходимо')} ${chalk.blue(banknotes50)}
  ${chalk.green('Купюр 10 необходимо')} ${chalk.blue(banknotes10)}
  ${chalk.green('Рублей необходимо')} ${chalk.blue(remainAmount)}
  `);
};
