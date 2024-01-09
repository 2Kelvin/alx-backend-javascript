export const weakMap = new WeakMap();

export function queryAPI(endpointParam) {
  let callCount;

  if (weakMap.has(endpointParam)) callCount = weakMap.get(endpointParam);
  else callCount = 0;

  weakMap.set(endpointParam, (callCount + 1));
  if (callCount >= 5) throw new Error('Endpoint load is high');
}
