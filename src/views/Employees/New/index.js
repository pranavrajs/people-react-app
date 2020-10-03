import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../../components/generic/Card';
import CardContent from '../../../components/generic/Card/CardContent';
import CardFooter from '../../../components/generic/Card/CardFooter';
import CardHeader from '../../../components/generic/Card/CardHeader';
import FormFooter from '../../../components/generic/Form/FormFooter';
import './new.css';
import i18n from '../../../i18n/en';
import EmployeeForm from '../../../components/business/EmployeeForm';

const { ADD } = i18n.EMPLOYEE;

const NewEmployeeComponent = (props) => {
  const { history } = props;

  const onCancel = () => history.replace('/employees');

  return (
    <Card>
      <CardHeader title={ADD.TITLE} subtitle={ADD.SUBTITLE} />
      <CardContent>
        <EmployeeForm />
      </CardContent>
      <CardFooter className="employee-form--footer">
        <FormFooter
          cancelButton={{
            label: ADD.CANCEL,
            onClick: onCancel,
          }}
          submitButton={{
            label: ADD.SUBMIT,
            onClick: () => {},
          }}
        />
      </CardFooter>
    </Card>
  );
};

NewEmployeeComponent.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
};

NewEmployeeComponent.defaultProps = {
};

export default NewEmployeeComponent;
