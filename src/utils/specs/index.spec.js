import { formatSalary } from '../'

describe('#formatSalary', () => {
  it('returns formatted string with valid inputs', () => {
    expect(formatSalary(60000)).toEqual('60,000 USD per year')
    expect(formatSalary(600)).toEqual('600 USD per year')
  })
})
