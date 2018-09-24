import Api from './api/mock-api'

const path = '/task'

const Task = {
  all(filters) {
    const params = { ...filters, sortBy: 'scheduleDate', order: 'desc', limit: Task.getPageLimit() }

    return Api.request(path, { params })
  },

  delete(id) {
    return Api.request(`${path}/${id}`, { method: 'DELETE' })
  },

  create(data) {
    return Api.request(path, { data, method: 'POST' })
  },

  update(data) {
    return Api.request(`${path}/${data.id}`, { data, method: 'PUT' })
  },

  save(task) {
    return task.id ? Task.update(task) : Task.create(task)
  },

  getPageLimit() {
    return 3
  },
}

export default Task
