const createInt8TypedArray = (length, index, number) => {
  if (
    !Number.isInteger(length) || !Number.isInteger(index) || !Number.isInteger(number)
  ) {
    return 'Invalid input: length, index, and number must be integers';
  }
  if (index >= 0 && index < length) {
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
    view.setInt8(index, number);
    return view;
  }
  return 'Position outside range';
};

export default createInt8TypedArray;
