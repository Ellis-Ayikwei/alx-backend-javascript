const createInt8TypedArray = (length, index, number) => {
  if (
    !Number.isInteger(length) || !Number.isInteger(index) || !Number.isInteger(number)
  ) {
    throw new Error('Position outside range');
  }
  if (index >= 0 && index < length) {
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
    view.setInt8(index, number);
    return view;
  }
  throw new Error('Position outside range');
};

export default createInt8TypedArray;
