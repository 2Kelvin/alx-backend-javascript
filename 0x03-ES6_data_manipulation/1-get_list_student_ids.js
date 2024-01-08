export default function getListStudentIds(arrOfObjs) {
  if (!Array.isArray(arrOfObjs)) {
    return [];
  }
  const idsArr = arrOfObjs.map((eachObj) => eachObj.id);
  return idsArr;
}
