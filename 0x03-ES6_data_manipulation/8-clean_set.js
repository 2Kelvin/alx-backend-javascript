export default function cleanSet(paramSet, startString) {
  if (!startString) return '';

  const matchingWordsArr = Array.from(paramSet).filter((word) => word.startsWith(startString));

  return matchingWordsArr.map((eachword) => eachword.slice(startString.length)).join('-');
}
