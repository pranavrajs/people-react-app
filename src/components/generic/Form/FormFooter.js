import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './form.css';

const FormFooter = ({
  cancelButton: { label: cancelButtonLabel, ...cancelButtonProps },
  submitButton: { label: submitButtonLabel, ...submitButtonProps },
}) => (
  <div className="display-row">
    <Button variant="primary-light" compact {...cancelButtonProps}>
      {cancelButtonLabel}
    </Button>
    <Button className="form-footer--submit-button" variant="primary" compact {...submitButtonProps}>
      {submitButtonLabel}
    </Button>
  </div>
);

FormFooter.propTypes = {
  cancelButton: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }),
  submitButton: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }),
};

FormFooter.defaultProps = {
  cancelButton: {},
  submitButton: {},
};

export default FormFooter;
