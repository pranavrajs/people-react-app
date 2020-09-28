import employeeSlice from '../../employees'

const { reducer } = employeeSlice;

describe('add', () => {
  it('add employee to the state', () => {
    const state = { records: [] }
    reducer(state, { type: 'employee/add', payload: { id: 1, name: 'John' } })
    expect(state.records).toEqual([{ id: 1, name: 'John' }])
  })
})

describe('reducer', () => {
  it('update employee in the state', () => {
    const state = { records: [{ id: 1, name: 'Grisham' }] }
    reducer(state, { type: 'employee/update', payload: { id: 1, name: 'John' } })
    expect(state.records).toEqual([{ id: 1, name: 'John' }])
  })
})
