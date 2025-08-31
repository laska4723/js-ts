import chalk from 'chalk';

export const sayHi = (name = 'Аноним') => {
  console.log(chalk.green('Привет ') + chalk.blue(name));
};

export const sayText = (text) => {
  console.log(chalk.bgBlack.white(text));
};

export const sum = (a, b, c, d, e) => {
  console.log(a + b + c + d + e);
};

export const power = (a, b) => {
  console.log(a ** b);
};
