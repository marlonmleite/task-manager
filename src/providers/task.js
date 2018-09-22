import Api from './api/mock-api'

const path = '/task'

const Task = {
  all(filters) {
    const params = { ...filters, sortBy: 'scheduleDate', order: 'desc' }

    return Api.request(path, { params })
  },
}

export default Task
