import { combineReducers } from 'redux';
import employees from './employees';

export default combineReducers({
  employees: employees.reducer,
});
