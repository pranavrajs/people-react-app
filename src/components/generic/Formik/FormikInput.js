import React from 'react'
import FormInput from '../Form/FormInput';

const FormikInput = ({ field, form, ...props }) => {
  return <FormInput {...field} {...props} />;
};

export default FormikInput
