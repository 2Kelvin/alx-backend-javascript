export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) throw new Error('Position outside range');

  const buffer = new ArrayBuffer(length);

  const int8typeArray = new Uint8Array(buffer);
  int8typeArray[position] = value;
  const mydataView = new DataView(buffer);

  return mydataView;
}
