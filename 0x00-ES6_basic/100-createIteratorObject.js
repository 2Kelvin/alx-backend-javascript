export default function createIteratorObject(report) {
  const list = [];
  for (const emp of Object.values(report.allEmployees)) list.push(...emp);

  return list;
}
