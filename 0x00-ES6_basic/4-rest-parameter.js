export default function returnHowManyArguments(...args) {
  let argc = 0;
  /* eslint-disable */
  for (const arg of args) {
    argc += 1;
  }
  return argc;
}
