export default function cleanSet(paramSet, startString) {
  if (!startString || typeof startString !== 'string' || startString.length === 0
    || !paramSet || !(paramSet instanceof Set) || startString === undefined) {
    return '';
  }
  /* eslint-disable */
  const matchingWordsArr = Array.from(paramSet)
    .filter((word) => word !== undefined ? word.startsWith(startString) : '');

  return matchingWordsArr
    .map((eachword) => eachword !== undefined ? eachword.slice(startString.length) : '')
    .join('-');
}
