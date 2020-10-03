export const getEmployeeRecords = (state) => state.employees.records || [];

export const getEmployeeRecord = (state, employeeId) => {
  const employeeRecords = getEmployeeRecords(state);
  const [employeeRecord = {}] = employeeRecords.filter((employee) => employee.id === employeeId);
  return employeeRecord;
};
