import { formatSalary, isAValidNumber, transformDate, isMonthValid, isDayValid } from '..';

describe('#formatSalary', () => {
  it('returns formatted string with valid inputs', () => {
    expect(formatSalary(60000)).toEqual('60,000 USD per year');
    expect(formatSalary(600)).toEqual('600 USD per year');
  });
});

describe('#isAValidNumber', () => {
  it('returns valid output', () => {
    expect(isAValidNumber('=')).toEqual(false);
    expect(isAValidNumber('23')).toEqual(true);
    expect(isAValidNumber('23/')).toEqual(false);
  });
})

describe('#transformDate', () => {
  it('returns current date if date string is invalid', () => {
    const mockDate = new Date(1466424490000);
    const spy = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate);

    expect(transformDate('', '20/02/').getTime()).toEqual(mockDate.getTime());
    spy.mockRestore();
  })

  it('returns the actual date if date string is valid', () => {
    const inputTime = new Date(1992, 10, 11);
    expect(transformDate('', '11/11/1992').getTime()).toEqual(inputTime.getTime());
  })
})

describe('#isMonthValid', () => {
  it('returns true if it is a valid month', () => {
    expect(isMonthValid(12)).toEqual(true)
  })
  it('returns true if it is an invalid month', () => {
    expect(isMonthValid(13)).toEqual(false)
  })
})

describe('#isDayValid', () => {
  it('returns true if it is a valid date', () => {
    expect(isDayValid(12, 12, 2020)).toEqual(true)
    expect(isDayValid(29, 2, 2020)).toEqual(true)
  })
  it('returns true if it is an invalid date', () => {
    expect(isDayValid(32)).toEqual(false)
    expect(isDayValid(30, 2, 2020)).toEqual(false)
    expect(isDayValid(29, 2, 2019)).toEqual(false)
  })
})
