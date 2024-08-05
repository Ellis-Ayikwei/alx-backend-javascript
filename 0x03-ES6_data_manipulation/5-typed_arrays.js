const createInt8TypedArray = (bufferLength, index, value) => {
  try {
    if (
      !Number.isInteger(bufferLength) ||
      !Number.isInteger(index) ||
      !Number.isInteger(value)
    ) {
      throw new Error('Invalid input.');
    }
    
    if (index >= 0 && index < bufferLength) {
      const buffer = new ArrayBuffer(bufferLength);
      const view = new DataView(buffer);
      view.setInt8(index, value);
      return view;
    }
    
    throw new Error('Index out of range.');
  } catch (error) {
    return 'Position outside range';
  }
};

export default createInt8TypedArray;
