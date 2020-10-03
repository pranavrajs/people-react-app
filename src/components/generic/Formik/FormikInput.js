import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../Form/FormInput';

const FormikInput = ({ field, form, ...props }) => <FormInput {...field} {...props} />;

FormikInput.propTypes = {
  field: PropTypes.shape({}),
  form: PropTypes.shape({}),
};

FormikInput.defaultProps = {
  field: {},
  form: {},
};

export default FormikInput;
