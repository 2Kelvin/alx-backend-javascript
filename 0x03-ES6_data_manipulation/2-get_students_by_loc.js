export default function getStudentsByLocation(arrOfObjs, city) {
  const cityStudentsArr = arrOfObjs.filter((eachObj) => eachObj.location === city);

  return cityStudentsArr;
}
