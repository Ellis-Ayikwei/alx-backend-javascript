const createInt8TypedArray = (bufferLength, position, value) => {
  const buffer = new ArrayBuffer(bufferLength);
  const dataView = new DataView(buffer);

  if (position < 0 || position >= bufferLength) {
    return 'Position outside range';
  }

  dataView.setInt8(position, value);
  return dataView;
};

export default createInt8TypedArray;
