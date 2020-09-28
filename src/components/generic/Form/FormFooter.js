import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './form.css'

const FormFooter = ({
  cancelButton,
  submitButton,
}) => {
  return (
    <div className="display-row">
      <Button variant="primary-light" compact  onClick={cancelButton.onClick}>
        {cancelButton.label}
      </Button>
      <Button className="form-footer--submit-button" variant="primary" compact onClick={submitButton.onClick}>
        {submitButton.label}
      </Button>
    </div>
  )
}

FormFooter.propTypes = {
  cancelButton: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.string.isRequired,
  }),
  submitButton: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.string.isRequired,
  })
}

export default FormFooter
