import React from 'react';
import { withLabelAndHelper } from './withLabelAndHelper';

const FormInput = (props) => (
  <input {...props} className="form--input" />
);

const FormWithLabelAndHelperText = withLabelAndHelper(FormInput);
export default FormWithLabelAndHelperText;
