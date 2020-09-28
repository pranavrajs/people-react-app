import React from 'react';
import { withLabelAndHelper } from './withLabelAndHelper';
import classnames from 'classnames';

const FormInput = ({ className, type, ...props }) => {
  const inputClassName = classnames(className, 'form--input')
  return <input {...props} className={inputClassName} />
};

const FormInputWithLabelAndHelperText = withLabelAndHelper(FormInput);
export default FormInputWithLabelAndHelperText;
