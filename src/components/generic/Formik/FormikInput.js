import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../Form/FormInput';

const FormikInput = ({ field, form, ...props }) => {
  const { name } = field;
  const { errors, touched } = form;

  return <FormInput error={errors[name]} touched={touched[name]} {...field} {...props} />;
};

FormikInput.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
  }),
  form: PropTypes.shape({
    errors: PropTypes.shape({}),
    touched: PropTypes.shape({}),
  }),
};

FormikInput.defaultProps = {
  field: {},
  form: {},
};

export default FormikInput;
