import groupBy from 'lodash/groupBy'
import map from 'lodash/map'
import { convertUnixDate } from 'core/utils/date'

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
  return groupBy(tasks, task => convertUnixDate(task.scheduleDate).format(format))
}

const getTasksByWeek = (tasks) => {
  return groupBy(tasks, (task) => {
    const current = convertUnixDate(task.scheduleDate)
    const startWeek = current.startOf('week').format('L')
    const endWeek = current.endOf('week').format('L')

    return `${startWeek} - ${endWeek}`
  })
}

export const getTasks = ({ tasks, viewType }) => {
  console.log(getTasksByDateFormat(tasks, 'L'))

  if (viewType === VIEW_TYPE.WEEK) {
    return getTasksByWeek(tasks)
  }

  return getTasksByDateFormat(tasks, viewFormats[viewType])
}
