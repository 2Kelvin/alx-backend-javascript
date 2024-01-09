export const weakMap = new WeakMap();

export function queryAPI(endpointParam) {
  let callCount = weakMap.get(endpointParam);

  if (callCount === undefined) callCount = 0;

  if (callCount >= 5) throw new Error('Endpoint load is high');

  weakMap.set(endpointParam, (callCount + 1));
}
