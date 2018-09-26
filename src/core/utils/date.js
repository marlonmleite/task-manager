import moment from 'moment'
import 'moment/locale/pt-br'

moment.updateLocale('pt-BR')

export const getNowISO = () => moment().toISOString()

export const convertISOToDate = (iso) => {
  const date = iso ? moment(iso, moment.ISO_8601) : null

  if (date && date.isValid()) {
    return date
  }

  return null
}

export const convertDateToISO = (date) => {
  const isValid = date && date instanceof moment && date.isValid()

  return isValid ? date.toISOString() : null
}
