import employeeSlice from '../../employees';

const { reducer } = employeeSlice;

describe('add', () => {
  it('add employee to the state', () => {
    const updatedState = reducer({ records: [] }, { type: 'employee/add', payload: { id: 1, name: 'John' } });
    expect(updatedState).toEqual({ records: [{ id: 1, name: 'John' }] });
  });
});

describe('reducer', () => {
  it('update employee in the state', () => {
    const updatedState = reducer({ records: [{ id: 1, name: 'Grisham' }] }, { type: 'employee/update', payload: { id: 1, name: 'John' } });
    expect(updatedState).toEqual({ records: [{ id: 1, name: 'John' }] });
  });
});
