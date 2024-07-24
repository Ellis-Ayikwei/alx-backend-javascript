// 0x00-ES6_basic/11-createEmployeesObject
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
