/* eslint-disable import/prefer-default-export */
import i18n from 'i18n/en';

const { LIST } = i18n.EMPLOYEE;

export const formatSalary = (salary) => `${salary.toLocaleString()} USD ${LIST.TABLE.PER_YEAR}`;

const isAValidNumber = (num) => !Number.isNaN(Number(num));

export function transformDate(value, originalValue = '') {
  const [mm, dd, yyyy] = originalValue.split('/');
  if (isAValidNumber(mm) && isAValidNumber(dd) && isAValidNumber(yyyy)) {
    return new Date(yyyy, mm, dd);
  }
  return new Date();
}
