export default function hasValuesFromArray(paramSet, paramArray) {
  const bool = paramArray.every((arrayItem) => paramSet.has(arrayItem));

  return bool;
}
