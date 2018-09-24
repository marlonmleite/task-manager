import groupBy from 'lodash/groupBy'
import map from 'lodash/map'
import { convertISOToDate } from 'core/utils/date'

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
