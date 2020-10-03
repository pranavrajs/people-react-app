import { createSlice } from '@reduxjs/toolkit';
import baseReducers from '../../base/reducers';
import baseInitialState from '../../base/initialState';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: baseInitialState,
  reducers: baseReducers,
});

export default employeeSlice;
