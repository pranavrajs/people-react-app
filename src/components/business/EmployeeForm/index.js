import React, { Fragment } from 'react';
import { Field } from 'formik';
import countries from 'country-json/src/country-by-name.json';
import i18n from 'i18n/en';

import FormikInput from '../../generic/Formik/FormikInput';
import './employee-form.css';
import FormikSelect from '../../generic/Formik/FormikSelect';

const countriesList = countries.map(({ country }) => ({ value: country, label: country }));
const { FORM } = i18n.EMPLOYEE;

const EmployeeForm = () => (
  <Fragment>
    <Field
      type="text"
      name="fullName"
      placeholder={FORM.NAME.PLACEHOLDER}
      label={FORM.NAME.LABEL}
      helperText={FORM.NAME.HELPER_TEXT}
      component={FormikInput}
    />
    <Field
      type="text"
      name="birthDate"
      placeholder={FORM.BIRTH_DATE.PLACEHOLDER}
      label={FORM.BIRTH_DATE.LABEL}
      helperText={FORM.BIRTH_DATE.HELPER_TEXT}
      component={FormikInput}
    />
    <Field
      type="text"
      name="jobTitle"
      placeholder={FORM.JOB_TITLE.PLACEHOLDER}
      label={FORM.JOB_TITLE.LABEL}
      helperText={FORM.JOB_TITLE.HELPER_TEXT}
      component={FormikInput}
    />
    <Field
      name="country"
      placeholder={FORM.COUNTRY.PLACEHOLDER}
      label={FORM.COUNTRY.LABEL}
      helperText={FORM.COUNTRY.HELPER_TEXT}
      options={countriesList}
      component={FormikSelect}
    />
    <Field
      type="number"
      name="salary"
      placeholder={FORM.SALARY.PLACEHOLDER}
      label={FORM.SALARY.LABEL}
      helperText={FORM.SALARY.HELPER_TEXT}
      component={FormikInput}
    />
  </Fragment>
);

export default EmployeeForm;
