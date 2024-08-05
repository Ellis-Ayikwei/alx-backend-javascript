const getListStudentIds = (studentList) => {
  if (!Array.isArray(studentList)) {
    return [];
  }
  return studentList.map(({ id }) => id);
};
export default getListStudentIds;
