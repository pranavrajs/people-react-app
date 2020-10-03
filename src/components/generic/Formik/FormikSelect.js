import React from 'react';
import PropTypes from 'prop-types';
import FormSelect from '../Form/FormSelect';

const FormikSelect = ({ field, form, ...props }) => {
  const { onChange, name, value } = field;

  const handleChange = (selectedValue) => {
    onChange({
      target: {
        name,
        value: selectedValue,
      },
    });
  };

  return <FormSelect {...field} {...props} value={value} name={name} onChange={handleChange} />;
};

FormikSelect.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any,
  }),
  form: PropTypes.shape({}),
};

FormikSelect.defaultProps = {
  field: {},
  form: {},
};
export default FormikSelect;
