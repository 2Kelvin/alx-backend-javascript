export default function updateUniqueItems(mapParam) {
  if (!(mapParam instanceof Map)) throw new Error('Cannot process');

  for (const [name, quantity] of mapParam) {
    if (quantity === 1) {
      mapParam.set(name, 100);
    }
  }

  return mapParam;
}
