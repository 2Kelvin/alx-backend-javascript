export default function getStudentIdsSum(arrOfObjs) {
  const sumOfIds = arrOfObjs.reduce(
    (idAccumulated, eachStudent) => idAccumulated + eachStudent.id,
    0,
  );

  return sumOfIds;
}
