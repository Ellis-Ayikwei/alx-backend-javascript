const divideFunction = (numerator, denominator) => {
  try {
    if (denominator === 0) {
      throw Error('cannot divide by zero');
    }

    return numerator / denominator;
  } catch (error) {
    return (error);
  }
};

export default divideFunction;
