import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import withLabelAndHelper from './withLabelAndHelper';

const FormInput = ({ className, ...props }) => {
  const inputClassName = classnames(className, 'form--input');
  return <input {...props} className={inputClassName} />;
};

FormInput.propTypes = {
  className: PropTypes.string,
};

FormInput.defaultProps = {
  className: '',
};

const FormInputWithLabelAndHelperText = withLabelAndHelper(FormInput);
export default FormInputWithLabelAndHelperText;
