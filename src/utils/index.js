import i18n from '../i18n/en';
const { LIST } = i18n.EMPLOYEE;

export const formatSalary = (salary) => `${salary.toLocaleString()} USD ${LIST.TABLE.PER_YEAR}`
