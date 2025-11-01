import chalk from 'chalk';

export const len = (text) => {
  return text.length;
};

export const func = (text) => {
  return (
    chalk.green(text.slice(0, 1).toUpperCase()) +
    chalk.blue(text.slice(1, text.length - 1).toLowerCase()) +
    chalk.green(text.slice(text.length - 1).toUpperCase())
  );
};
