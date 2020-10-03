export default {
  EMPLOYEE: {
    LIST: {
      NO_RECORDS: 'There are no available employee records.',
      CLICK_ON_ADD_EMPLOYEE: ' Click on Add Employee to create a new record.',
      TITLE: 'People',
      RECORD_SINGULAR: 'employee',
      RECORD_PLURAL: 'employees',
      ADD_EMPLOYEE_BUTTON_TEXT: 'Add Employee',
      TABLE: {
        HEADER: {
          EMPLOYEE: 'Employee',
          JOB_TITLE: 'Job Title',
          COUNTRY: 'Country',
          SALARY: 'Salary',
        },
        EDIT_BUTTON_TEXT: 'Edit',
        PER_YEAR: 'per year',
      },
    },
    ADD: {
      TITLE: 'Add a new employee',
      SUBTITLE: 'Fill out the information of your new employee.',
      SUBMIT: 'Add Employee',
      CANCEL: 'Cancel',
    },
    EDIT: {
      TITLE: 'Edit employee',
      SUBTITLE: 'Edit the information of your employee.',
      SUBMIT: 'Save',
      CANCEL: 'Cancel',
    },
    FORM: {
      NAME: {
        LABEL: 'Name',
        PLACEHOLDER: 'e.g. Jane Doe',
        HELPER_TEXT: 'First and last names',
        ERRORS: {
          TOO_SHORT: 'The name should contain atleast 2 characters',
          REQUIRED: 'Required',
        },
      },
      BIRTH_DATE: {
        LABEL: 'Birth Date',
        PLACEHOLDER: 'e.g. 17/02/1990',
        HELPER_TEXT: 'DD/MM/YYYY',
        ERRORS: {
          DATE_BEFORE: 'Date should be before',
          DATE_AFTER: 'Date should be after',
          REQUIRED: 'Required',
        },
      },
      JOB_TITLE: {
        LABEL: 'Job title',
        PLACEHOLDER: 'e.g Product manager',
        HELPER_TEXT: 'What is their role?',
        ERRORS: {
          TOO_SHORT: 'The job title should contain atleast 2 characters',
          REQUIRED: 'Required',
        },
      },
      COUNTRY: {
        LABEL: 'Country',
        PLACEHOLDER: 'Select a country',
        HELPER_TEXT: 'Where are they based?',
        ERRORS: {
          REQUIRED: 'Required',
        },
      },
      SALARY: {
        LABEL: 'Salary',
        PLACEHOLDER: 'e.g. 50000',
        HELPER_TEXT: 'Gross yearly salary',
        ERRORS: {
          REQUIRED: 'Required',
        },
      },
    },
  },
};
