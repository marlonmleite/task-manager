import map from 'lodash/map'
import sumBy from 'lodash/sumBy'
import some from 'lodash/some'

const countCompletedByStatus = status => (task) => {
  if (task.completed === status) {
    return 1
  }

  return 0
}

export const getDoughnutData = (tasks) => {
  const total = {
    completed: sumBy(tasks, countCompletedByStatus(true)),
    pending: sumBy(tasks, countCompletedByStatus(false)),
  }

  return total
}

export const getLineData = (tasks, tags) => {
  const result = map(tags, tag => ({
    name: tag.name,
    completedTasks: sumBy(tasks, (task) => {
      return some(task.tags, tag) ? 1 : 0
    }),
  }))

  return {
    labels: map(result, 'name'),
    data: map(result, 'completedTasks'),
  }
}
