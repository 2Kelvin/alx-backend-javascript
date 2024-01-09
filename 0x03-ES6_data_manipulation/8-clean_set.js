export default function cleanSet(paramSet, startString) {
  if (!startString || typeof startString !== 'string' || startString.length === 0
    || !paramSet || !(paramSet instanceof Set) || startString === undefined) {
    return '';
  }

  const matchingWordsArr = [...paramSet].filter((word) => word.startsWith(startString));

  return matchingWordsArr.map((eachword) => eachword.slice(startString.length)).join('-');
}
