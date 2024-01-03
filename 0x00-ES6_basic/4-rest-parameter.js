export default function returnHowManyArguments(...args) {
  let argc = 0;
  for (const arg of args) {
    argc += 1;
  }
  return argc;
}
