const divideFunction = (dividend, divisor) => {
    if (divisor === 0) {
      throw new Error('cannot divide by zero');
    }

    return dividend / divisor;
  }

export default divideFunction;
