import groupBy from 'lodash/groupBy'
import * as Yup from 'yup'
import { convertISOToDate, getNowISO } from 'core/utils/date'

export const VIEW_TYPE = {
  DAY: 'DAY',
  WEEK: 'WEEK',
  MOUNTH: 'MOUNTH',
}

const viewFormats = {
  DAY: 'L',
  MOUNTH: 'MMM/YYYY',
}

const getTasksByDateFormat = (tasks, format) => {
  return groupBy(tasks, task => convertISOToDate(task.scheduleDate).format(format))
}

const getTasksByWeek = (tasks) => {
  return groupBy(tasks, (task) => {
    const current = convertISOToDate(task.scheduleDate)
    const startWeek = current.startOf('week').format('L')
    const endWeek = current.endOf('week').format('L')

    return `${startWeek} - ${endWeek}`
  })
}

export const getTasks = ({ tasks, viewType }) => {
  if (viewType === VIEW_TYPE.WEEK) {
    return getTasksByWeek(tasks)
  }

  return getTasksByDateFormat(tasks, viewFormats[viewType])
}

export const crudSchema = Yup.object().shape({
  description: Yup.string()
    .required('Campo obrigatório'),
  duration: Yup.number()
    .positive('A duração não pode ser negativa')
    .required('Campo obrigatório'),
  durationUnit: Yup.string()
    .required('Campo obrigatório'),
  reminder: Yup.number()
    .positive('O lembrete não pode ser negativo')
    .required('Campo obrigatório'),
  reminderUnit: Yup.string()
    .required('Campo obrigatório'),
  scheduleDate: Yup.string()
    .required('Campo obrigatório'),
  tags: Yup.array()
    .of(Yup.object())
    .required('Campo obrigatório'),
  createdAt: Yup.string().default(getNowISO),
})
