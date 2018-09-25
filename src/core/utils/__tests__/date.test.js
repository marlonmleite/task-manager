import { convertISOToDate, convertDateToISO, getNowISO } from '../date'
import moment from 'moment'

describe('date', () => {
  it('getNow in ISO format', () => {
    const now = getNowISO()

    expect(now).toBe('1970-01-01T00:00:00.000Z')
  })

  it('convert ISO to date', () => {
    const date = convertISOToDate('1970-01-01T00:00:00.000Z')

    expect(date instanceof moment).toBeTruthy()
  })

  it('convert invalid ISO to date', () => {
    const date = convertISOToDate('a')

    expect(date).toBeNull()
  })

  it('convert date to ISO', () => {
    const date = moment()
    const iso = convertDateToISO(date)

    expect(iso).toBe('1970-01-01T00:00:00.000Z')
  })

  it('convert invalid date to ISO', () => {
    const iso = convertDateToISO('aaa')

    expect(iso).toBeNull()
  })
})
