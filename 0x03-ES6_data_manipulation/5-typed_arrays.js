export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const int8typeArray = new Uint8Array(buffer);

  /* eslint-disable */
  try {
    int8typeArray[position] = value;
    const mydataView = new DataView(buffer);

    return mydataView;
  } catch {
    throw new Error('Position outside range');
  }
}
