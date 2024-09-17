const updateStudentGradeByCity = (students, city, newGrades) => students
  .filter((student) => student.location === city)
  .map((student) => {
    const updatedGrade = newGrades.find((newGrade) => newGrade.studentId === student.id);
    return updatedGrade ? { ...student, grade: updatedGrade.grade } : { ...student, grade: 'N/A' };
  });

export default updateStudentGradeByCity;
