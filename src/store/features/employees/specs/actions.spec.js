import employeeSlice from '..';

const { actions } = employeeSlice;

describe('#add', () => {
  it('returns correct action type', () => {
    expect(actions.add({ id: 1 })).toEqual({
      type: 'employee/add',
      payload: { id: 1 },
    });
  });
});

describe('#update', () => {
  it('returns correct action type', () => {
    expect(actions.update({ id: 1 })).toEqual({
      type: 'employee/update',
      payload: { id: 1 },
    });
  });
});
