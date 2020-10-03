import {
  date, number, object, string,
} from 'yup';
import subYears from 'date-fns/subYears';
import format from 'date-fns/format';

import i18n from 'i18n/en';
import { transformDate } from 'utils';

const { FORM } = i18n.EMPLOYEE;

const employeeSchema = object({
  fullName: string().min(2, FORM.NAME.ERRORS.TOO_SHORT).required(FORM.NAME.ERRORS.REQUIRED),
  birthDate: date()
    .max(subYears(new Date(), 18), ({ max }) => `${FORM.BIRTH_DATE.ERRORS.DATE_BEFORE} ${format(max, 'dd/MM/yyyy')}`)
    .min(new Date(1900, 1, 1), ({ min }) => `${FORM.BIRTH_DATE.ERRORS.DATE_AFTER} ${format(min, 'dd/MM/yyyy')}`)
    .required(FORM.BIRTH_DATE.ERRORS.REQUIRED)
    .transform(transformDate),
  jobTitle: string().required(FORM.NAME.ERRORS.REQUIRED),
  country: string().required(FORM.NAME.ERRORS.REQUIRED),
  salary: number().required(FORM.NAME.ERRORS.REQUIRED),
});

export default employeeSchema;
