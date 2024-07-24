export default function createIteratorObject(report) {
    const departmentArrays = Object.values(report.allEmployees);
    let currentDepartmentIndex = 0;
    let currentEmployeeIndex = 0;

    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (currentDepartmentIndex < departmentArrays.length) {
                const currentDepartment = departmentArrays[currentDepartmentIndex];

                if (currentEmployeeIndex < currentDepartment.length) {
                    return {
                        value: currentDepartment[currentEmployeeIndex++],
                        done: false
                    };
                }

                currentEmployeeIndex = 0;
                currentDepartmentIndex++;
                return this.next();
            }

            return { value: undefined, done: true };
        }
    };
}
