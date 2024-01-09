export default function cleanSet(paramSet, startString) {
  if (!startString || typeof startString !== 'string' || startString.length === 0
    || !paramSet || !(paramSet instanceof Set) || startString === undefined) {
    return '';
  }

  const matchingWordsArr = Array.from(paramSet).filter((word) => word.startsWith(startString));

  return matchingWordsArr.map((eachword) => eachword.slice(startString.length)).join('-');
}
