import { getEmployeeRecord, getEmployeeRecords, getLastEmployeeRecord, getNextRecordId } from '../selectors';


describe('#getEmployeeRecords', () => {
  it('returns correct records', () => {
    expect(getEmployeeRecords({ employees: {} })).toEqual([]);
    expect(getEmployeeRecords({
      employees: {
        records: [
          {
            id: 1,
            name: 'John Doe'
          }
        ]
      }
    })).toEqual([{
      id: 1,
      name: 'John Doe'
    }]);
  });
});

describe('#getEmployeeRecord', () => {
  it('returns correct record', () => {
    expect(getEmployeeRecord({ employees: {} }, 1)).toEqual({});
    expect(getEmployeeRecord({
      employees: {
        records: [
          {
            id: 1,
            name: 'John Doe'
          }
        ]
      }
    }, 1)).toEqual({
      id: 1,
      name: 'John Doe'
    });
  });
});
