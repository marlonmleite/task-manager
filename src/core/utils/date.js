import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('pt-BR')

export const getNow = () => moment()

// export const formatDate = (date, format) => {
//   return moment(date).format(format)
// }

export const convertUnixDate = date => moment.unix(date)
