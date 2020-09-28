import React from 'react'
import FormSelect from '../Form/FormSelect';

const FormikSelect = ({ field, form, ...props }) => {
  const { onChange, name, value } = field

  const handleChange = selectedValue => {
    onChange({
      target: {
        name,
        value: selectedValue,
      },
    })
  }

  return <FormSelect {...field} {...props} value={value} name={name} onChange={handleChange} />;
};

export default FormikSelect
