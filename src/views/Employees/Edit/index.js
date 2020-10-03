import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/generic/Card';
import CardContent from 'components/generic/Card/CardContent';
import CardFooter from 'components/generic/Card/CardFooter';
import CardHeader from 'components/generic/Card/CardHeader';
import FormFooter from 'components/generic/Form/FormFooter';
import './new.css';
import i18n from 'i18n/en';
import EmployeeForm from 'components/business/EmployeeForm';
import employeeSchema from 'components/business/EmployeeForm/schema';
import { Form, Formik } from 'formik';
import { Redirect } from 'react-router-dom';

const { EDIT } = i18n.EMPLOYEE;

const EditEmployee = (props) => {
  const { history, updateEmployee, employee } = props;
  const goToListPage = () => history.replace('/employees');

  if (!employee.id) {
    return <Redirect to="/employees" />;
  }

  return (
    <Card>
      <CardHeader title={EDIT.TITLE} subtitle={EDIT.SUBTITLE} />
      <Formik
        initialValues={employee}
        validationSchema={employeeSchema}
        onSubmit={(values) => {
          updateEmployee(values);
          goToListPage();
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <CardContent>
              <div className="employee-form mx-auto">
                <EmployeeForm />
              </div>
            </CardContent>
            <CardFooter className="employee-form--footer">
              <FormFooter
                cancelButton={{
                  label: EDIT.CANCEL,
                  onClick: goToListPage,
                }}
                submitButton={{
                  label: EDIT.SUBMIT,
                  type: 'submit',
                }}
              />
            </CardFooter>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

EditEmployee.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number,
  }),
  updateEmployee: PropTypes.func.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
};

EditEmployee.defaultProps = {
  employee: {},
};

export default EditEmployee;
