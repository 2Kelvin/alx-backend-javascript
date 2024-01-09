export default function cleanSet(paramSet, startString) {
  if (!startString || startString.length === 0 || !(paramSet instanceof Set)) {
    return '';
  }

  const matchingWordsArr = Array.from(paramSet).filter((word) => word.startsWith(startString));

  return matchingWordsArr.map((eachword) => eachword.slice(startString.length)).join('-');
}
