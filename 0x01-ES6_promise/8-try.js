const divideFunction = (dividend, divisor) => {
  if (divisor === 0) {
    throw new Error('cannot divide by 0');
  }

  return dividend / divisor;
};

export default divideFunction;
