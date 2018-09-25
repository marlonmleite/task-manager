import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('pt-BR')

export const getNow = () => moment()

export const getNowISO = () => moment().toISOString()

export const convertISOToDate = date => date ? moment(date, moment.ISO_8601) : null

export const convertDateToISO = date => date ? date.toISOString() : null
