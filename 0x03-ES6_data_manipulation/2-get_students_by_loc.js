const getStudentsByLocation = (stus, city) => stus.filter(({ location }) => location === city);
export default getStudentsByLocation;
