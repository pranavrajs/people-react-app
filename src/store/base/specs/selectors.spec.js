import { getLastRecord, getNextRecordId } from '../selectors';

describe('#getLastRecord', () => {
  it('returns correct record', () => {
    expect(getLastRecord({ records: [] })).toEqual({});
    expect(getLastRecord({
      records: [
        {
          id: 1,
          name: 'John Doe'
        }
      ]
    })).toEqual({
      id: 1,
      name: 'John Doe'
    });
  });
});


describe('#getNextRecordId', () => {
  it('returns correct record', () => {
    expect(getNextRecordId({ records: [] })).toEqual(1);
    expect(getNextRecordId({
      records: [
        {
          id: 1,
          name: 'John Doe'
        }
      ]
    })).toEqual(2);
  });
});
