export const weakMap = new WeakMap();

export function queryAPI(endpointParam) {
  if (!(weakMap.has(endpointParam))) weakMap.set(endpointParam, 0);

  weakMap.set(endpointParam, (weakMap.get(endpointParam) + 1));
  if (weakMap.get(endpointParam) >= 5) throw new Error('Endpoint load is high');
}
