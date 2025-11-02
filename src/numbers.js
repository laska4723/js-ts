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
