const createInt8TypedArray = (length, index, number) => {
  try {
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
    view.setInt8(index, number);
    return view;
  } catch {
    return "Position outside range";
  }
};

export default createInt8TypedArray;
