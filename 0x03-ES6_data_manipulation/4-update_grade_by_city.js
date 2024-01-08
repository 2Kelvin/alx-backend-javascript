export default function updateStudentGradeByCity(arrOfObjs, city, newGrades) {
  const cityStudents = arrOfObjs.filter((studObj) => studObj.location === city);

  return cityStudents.map((eachStud) => {
    const foundStudWithGrade = newGrades.find((gradeObj) => eachStud.id === gradeObj.studentId);

    return {
      ...eachStud,
      grade: foundStudWithGrade ? foundStudWithGrade.grade : 'N/A',
    };
  });
}
