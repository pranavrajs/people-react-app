/* eslint-disable import/prefer-default-export */
import i18n from 'i18n/en';

const { LIST } = i18n.EMPLOYEE;

export const formatSalary = (salary) => `${salary.toLocaleString()} USD ${LIST.TABLE.PER_YEAR}`;

export const isAValidNumber = (num) => !Number.isNaN(Number(num));

export const isDayValid = (dd, mm, yyyy) => {
  if ([1, 3, 5, 7, 8, 10, 12].includes(mm)) {
    return dd > 0 && dd <= 31;
  }

  if (mm === 2) {
    if (yyyy % 4 === 0) {
      return dd > 0 && dd <= 29;
    }
    return dd > 0 && dd <= 28;
  }

  return dd > 0 && dd <= 30;
};

export const isMonthValid = (mm) => mm > 0 && mm <= 12;

export function transformDate(value, originalValue = '') {
  const [day, month, year] = originalValue.split('/');

  if (!isAValidNumber(day) || !isAValidNumber(month) || !isAValidNumber(year)) {
    return new Date();
  }

  const dd = Number(day);
  const mm = Number(month);
  const yyyy = Number(year);

  if (isMonthValid(mm) && isDayValid(dd)) {
    return new Date(yyyy, mm - 1, dd);
  }
  return new Date();
}
