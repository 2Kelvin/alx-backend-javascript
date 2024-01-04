export default function iterateThroughObject(reportWithIterator) {
  let rslt = '';
  for (const [i, obj] of reportWithIterator.entries()) {
    if (i !== reportWithIterator.length - 1) rslt += `${obj} | `;
    else rslt += obj;
  }

  return rslt;
}
