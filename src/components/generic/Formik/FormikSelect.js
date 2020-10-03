import React from 'react';
import PropTypes from 'prop-types';
import FormSelect from '../Form/FormSelect';

const FormikSelect = ({ field, form, ...props }) => {
  const {
    onBlur, onChange, name, value,
  } = field;
  const { errors, touched } = form;

  const handleChange = (selectedValue) => {
    onChange({
      target: {
        name,
        value: selectedValue,
      },
    });
  };

  const handleBlur = () => {
    onBlur({
      target: {
        name,
      },
    });
  };

  return (
    <FormSelect
      {...field}
      {...props}
      error={errors[name]}
      touched={touched[name]}
      name={name}
      onBlur={handleBlur}
      onChange={handleChange}
      value={value}
    />
  );
};

FormikSelect.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.any,
  }),
  form: PropTypes.shape({
    errors: PropTypes.shape({}),
    touched: PropTypes.shape({}),
  }),

};

FormikSelect.defaultProps = {
  field: {},
  form: {},

};
export default FormikSelect;
